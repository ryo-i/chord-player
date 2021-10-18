import React, { useState, useEffect, useRef }  from 'react';
import styled from 'styled-components';
import { inner } from '../data/data.json';
import * as Tone from 'tone';


// CSS in JS
const keyWidth = '37px'

const CoadPlayer = styled.div`
  color: #fff;
  #key {
    max-width: calc(${keyWidth} * 21);
    margin: 0 auto;
    overflow-x: scroll;
    .key_inner {
      background: #333;
      width: calc(${keyWidth} * 21);
      display: block;
      padding: 0 0 10px;
      position: relative;
      button {
        width: ${keyWidth};
        text-align: center;
        display: inline-block;
      }
      .w_key {
        background: #FFF;
        border: 1px solid #333;
        color: #000;
        padding:  90px 0 10px;
      }
      .b_key {
        position: absolute;
        z-index: 10;
        top: 0;
        margin: 0 -20px;
        padding: 0;
        background: #000;
        border: 1px solid #fff;
        border-top-width: 0;
        color: #fff;
        height: 75px;
      }
      .w_key.exclusion {
        background: #ccc;
      }
      .b_key.exclusion {
        background: #444;
      }
      .w_key.current {
        background: #edced2;
      }
      .b_key.current {
        background: #A63744;
      }
    }
  }

  #chord_text {
    margin: 15px 0;
    text-align: center;
    h2 {
      margin: 0 0 5px;
      font-size: 20px;
      color: #fff;
      line-height: 1.25;
    }
    p {
      margin: 0;
    }
  }

  #chord_types {
    margin: 0 auto ;
    max-width: 700px;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 10px 10px 0;
    text-align: left;
    dl {
      padding: 5px 0 0;
      display: flex;
      margin: 0;
      &:not(:last-child) {
        border-bottom: 1px solid #eee;
      }
      dt {
        font-weight: bold;
        width: 15%;
      }
      dd {
        margin: 0;
        display: inline-block;
        width: 85%;
        label {
          margin: 0 10px 10px 0;
          display: inline-block;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;


// Component
function Inner() {
  // Hooks
  const [synth, setSynth] = useState(null);
  const [chords, setChords] = useState(inner.keys);
  const [chord, setChord] = useState(['-']);
  const [rootKey, setRootKey] = useState('-');
  const [chordsInterval, setChordInterval] = useState('-');
  const [chordValue, setChordValue] = useState(inner.chordTypes[0].chordValue);
  const [chordName, setChordName] = useState(inner.chordTypes[0].chordName);
  const [chordKeys, setChordKeys] = useState(inner.chordTypes[0].chordKeys.join(','));
  const keyElement = useRef<HTMLInputElement>(null);


  // オブジェクト設定
  interface chordTypes {
    chordValue: string;
    chordName: string;
    chordKeys: number[];
  };

  interface keyButtons {
    value: string;
    className: string;
    onClick: boolean;
    keyName: string;
  };

  interface chordTypeButtons {
    id: string;
    value: string;
    cohrdTypeName: string;
    defaultChecked: boolean;
  };


  // シンセ設定
  useEffect(() => {
    setSynth(new Tone.PolySynth().toDestination());
  },[]);


  // 鍵盤リセット
  const resetKey = (): void => {
    const keyElements: HTMLCollection = keyElement.current.children;
    for (let i = 0; i < keyElements.length; i++) {
      if (keyElements[i].classList.contains('current')) {
        keyElements[i].classList.remove('current');
      }
    }
  };


  // 鍵盤カレント
  const currentKye = (currentChord): void => {
    const keyElements: HTMLCollection = keyElement.current.children;
    for (let i = 0; i < keyElements.length; i++) {
      const getKeyElement: HTMLButtonElement = keyElements[i] as HTMLButtonElement;
      const keyText: string = getKeyElement.value;
      if (currentChord.includes(keyText)) {
        keyElements[i].classList.add('current');
      }
    }
  };


  // 最新のコード取得
  const getChord = (key: string, chords: string[][]): string[] => {
    let getCurrentChord: string[];
    for (let i = 0 ; i < chords.length; i++) {
      if (chords[i].indexOf(key) === 0) {
        getCurrentChord = chords[i];
      }
    }
    return getCurrentChord;
  };


  // 鍵盤の構成音のテキスト取得
  const chordKeysText = (chord: string[]): string[] => {
    let chordKeysText: string[] = [];
    for (let i = 0; i < chord.length; i++) {
      const getChortText: string = chord[i].slice(0, -1);
      chordKeysText.push(getChortText);
    }
    return chordKeysText;
  };


  // 鍵盤クリックイベント
  const clickKey = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const eventTarget: HTMLButtonElement = e.target as HTMLButtonElement;
    const KeyValue: string = eventTarget.value;
    const getCurrentChord: string[] = getChord(KeyValue, chords);
    setChord(getCurrentChord);
    resetKey();
    currentKye(getCurrentChord);

    const getChordsIntervalsArray: string[] = chordKeysText(getCurrentChord);
    const getRootkey: string = getChordsIntervalsArray[0];
    const getChordsIntervals: string = getChordsIntervalsArray.join(', ');
    setRootKey(getRootkey);
    setChordInterval(getChordsIntervals);

    synth.triggerAttackRelease(getCurrentChord, 0.4);
  };


  // コードタイプ取得
  const getChordTypes = (getChordValue: string): chordTypes => {
    let getchordTypes: chordTypes;
    for (let i = 0; i < inner.chordTypes.length; i++) {
      if (inner.chordTypes[i].chordValue === getChordValue) {
        getchordTypes = inner.chordTypes[i];
      }
    }
    return getchordTypes;
  };


  //コード取得
  const getChords = (chordTypes: chordTypes): string[][] => {
    let getChords: string[][] = [];
    for (let i = 0 ; i < inner.keys.length; i++) {
      getChords.push([]);
      for (var  j = 0; j < chordTypes['chordKeys'].length; j++){
        const key: string = inner.scale[i+chordTypes['chordKeys'][j]];
        getChords[i].push(key);
      }
    }
    return getChords;
  };


  // コード構成音変更
  const changeChordInterval = (currentChords: string[][]): void => {
    const getRoot: string = String(chord[0]);
    const getCurrentChord: string[] = getChord(getRoot, currentChords);
    resetKey();
    currentKye(getCurrentChord);

    const getChordsIntervalsArray: string[] = chordKeysText(getCurrentChord);
    const getChordsIntervals: string = getChordsIntervalsArray.join(', ');
    setChordInterval(getChordsIntervals);
  };


  //コードタイプ変更イベント
  const chordTypeSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const getChordValue: string = e.target.value;
    const getCurrentChordTypes: chordTypes = getChordTypes(getChordValue);
    setChordValue(getCurrentChordTypes.chordValue);
    setChordName(getCurrentChordTypes.chordName);
    setChordKeys(getCurrentChordTypes.chordKeys.join(', '));

    const getCurrentChords: string[][] = getChords(getCurrentChordTypes);
    setChords(getCurrentChords);
    if (rootKey !== '-') {
      changeChordInterval(getCurrentChords);
    }
  }


  // JSX
  return (
    <>
      <CoadPlayer>
        <div id="key">
          <div className="key_inner" ref={keyElement}>
            {inner.keyButtons.map((val: keyButtons) =>
              <button key={val.value} value={val.value} className={val.className}
              onClick={val.onClick ? clickKey : null}>{val.keyName}</button>
            )}
          </div>
        </div>
        <div id="chord_type">
          <section id="chord_text">
            <h2 id="chord_type">{chordValue}</h2>
            <p id="chord_keys">構成音: {chordKeys}</p>
            <p id="chord_name">{rootKey}{chordName}: {chordsInterval}</p>
          </section>
          <div id="chord_types">
            <dl id="root">
              <dt>根音</dt>
              <dd>
                {inner.chordTypeButtons.root.map((val: chordTypeButtons) =>
                  <label key={val.id}><input key={val.id} type="radio" id={val.id} name="chord_type" value={val.value} onChange={chordTypeSelect}
                  defaultChecked={val.defaultChecked || null} />{val.cohrdTypeName}</label>
                )}
              </dd>
            </dl>
            <dl id="triad">
              <dt>三和音</dt>
              <dd>
                {inner.chordTypeButtons.triad.map((val: chordTypeButtons) =>
                  <label key={val.id}><input key={val.id} type="radio" id={val.id} name="chord_type" value={val.value} onChange={chordTypeSelect}
                  defaultChecked={val.defaultChecked || null} />{val.cohrdTypeName}</label>
                )}
              </dd>
            </dl>
            <dl id="seventh">
              <dt>四和音</dt>
              <dd>
                {inner.chordTypeButtons.seventh.map((val: chordTypeButtons) =>
                  <label key={val.id}><input key={val.id} type="radio" id={val.id} name="chord_type" value={val.value} onChange={chordTypeSelect}
                  defaultChecked={val.defaultChecked || null} />{val.cohrdTypeName}</label>
                )}
              </dd>
            </dl>
            <dl id="tension">
              <dt>五和音</dt>
              <dd>
                {inner.chordTypeButtons.tension.map((val: chordTypeButtons) =>
                  <label key={val.id}><input key={val.id} type="radio" id={val.id} name="chord_type" value={val.value} onChange={chordTypeSelect}
                  defaultChecked={val.defaultChecked || null} />{val.cohrdTypeName}</label>
                )}
              </dd>
            </dl>
          </div>
        </div>
      </CoadPlayer>
    </>
  );
}

export default Inner;
