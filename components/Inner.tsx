import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import { inner } from '../data/data.json';
import * as Tone from 'tone';


// CSS in JS
const CoadPlayer = styled.div`
  #key {
    background: #333;
    padding: 10px;
    width: 300px;
    display: block;
    margin: 0 auto;
    position: relative;
    .w_key {
      background: #FFF;
      border: 1px solid #333;
      width: 35px;
      color: #000;
      text-align: center;
      padding:  90px 0 10px;
      display: inline-block;
    }
    .b_key {
      position: absolute;
      z-index: 10;
      top: 10px;
      margin: 0 -20px;
      padding: 0;
      background: #000;
      border: 1px solid #fff;
      color: #fff;
      width: 35px;
      height: 75px;
      text-align: center;
      display: inline-block;
    }
    .w_key:hover,
    .w_key:focus {
      background: #ccc;
    }
    .b_key:hover,
    .b_key:focus {
      background: #444;
    }
  }

  #chord_text {
    margin: 15px 0;
    text-align: center;
    h2 {
      margin: 0 0 5px;
      font-size: 20px;
      line-height: 1.25;
    }
    p {
      margin: 0;
    }
  }

  #chord_types {
    margin: 0 auto ;
    max-width: 400px;
    border: 1px solid #ccc;
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
  const [chordValue, setChordValue] = useState(inner.chordTypes[0].chordValue);
  const [chordName, setChordName] = useState(inner.chordTypes[0].chordName);
  const [chordKeys, setChordKeys] = useState(inner.chordTypes[0].chordKeys);
  const [chords, setChords] = useState(inner.keys);
  const [chord, setChord] = useState(['-']);
  const [rootKey, setRootKey] = useState('-');
  const [chordsInterval, setChordIntervals] = useState('-');


  //和音
  const getChords = (chordTypes) => {
    let getChords = [];
    for (let i = 0 ; i < inner.keys.length; i++ ) {
      getChords.push( [] );
      for (var  j = 0; j < chordTypes['chordKeys'].length; j++){
        const nmb = inner.scale[i+chordTypes['chordKeys'][j]];
        getChords[i].push(nmb);
      }
    }
    return getChords;
  };


  // 鍵盤の構成音のテキスト取得
  const chordKeysText = (chord) => {
    let chordKeysText = [];
    for (let i = 0; i < chord.length; i++) {
      chordKeysText.push(chord[i].slice(0, -1));
    }
    return chordKeysText;
  };


  //コードタイプ設定
  const chordTypeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getChordValue = e.target.value;
    // console.log('getChordValue', getChordValue);

    let getchordTypes;
    for(let i = 0; i < inner.chordTypes.length; i++){
      if(inner.chordTypes[i].chordValue === getChordValue) {
        getchordTypes = inner.chordTypes[i];
        setChordValue(getchordTypes.chordValue);
        setChordName(getchordTypes.chordName);
        setChordKeys(getchordTypes.chordKeys.join(', '));
      }
    }
    // console.log('getchordTypes', getchordTypes);

    const getThisChords = getChords(getchordTypes);
    setChords(getThisChords);
    // console.log('getThisChords', getThisChords);

    const getRoot = String(chord[0]);
    // console.log('getRoot', getRoot);
    let getThisChord;
    for (let i = 0 ; i < getThisChords.length; i++) {
      if (getThisChords[i].indexOf(getRoot) === 0) {
        getThisChord = getThisChords[i];
        console.log('getThisChord', getThisChord);
      }
    }

    const getChordsIntervalsArray = chordKeysText(getThisChord);
    const getChordsIntervals = getChordsIntervalsArray.join(', ');
    setChordIntervals(getChordsIntervals);
  }


  // シンセ設定
  let synth;
  useEffect(() => {
    synth = new Tone.PolySynth().toDestination();
  });


  // 鍵盤クリックイベント
  const clickKey = (e) => {
    const KeyValue = e.target.value;
    console.log('KeyValue', KeyValue);

    let getChord;
    for (let i = 0 ; i < chords.length; i++) {
      if (chords[i].indexOf(KeyValue) === 0) {
        getChord = chords[i];
        console.log('getCord', getChord);
      }
    }
    setChord(getChord);

    // 和音の音程を取得
    const getChordsIntervalsArray = chordKeysText(getChord);
    const getRootkey = getChordsIntervalsArray[0];
    const getChordsIntervals = getChordsIntervalsArray.join(', ');
    // console.log('getRootkey', getRootkey);
    // console.log('getChordsInterval', getChordsIntervals);
    setRootKey(getRootkey);
    setChordIntervals(getChordsIntervals);

    synth.triggerAttackRelease(getChord, '8n');
  }


  // JSX
  return (
    <>
      <CoadPlayer>
        <div id="key">
          <button value="C4" className="w_key" onClick={clickKey}>C</button>
          <button value="C#4" className="b_key" onClick={clickKey}></button>
          <button value="D4" className="w_key" onClick={clickKey}>D</button>
          <button value="D#4" className="b_key" onClick={clickKey}></button>
          <button value="E4" className="w_key" onClick={clickKey}>E</button>
          <button value="F4" className="w_key" onClick={clickKey}>F</button>
          <button value="F#4" className="b_key" onClick={clickKey}></button>
          <button value="G4" className="w_key" onClick={clickKey}>G</button>
          <button value="G#4" className="b_key" onClick={clickKey}></button>
          <button value="A4" className="w_key" onClick={clickKey}>A</button>
          <button value="A#4" className="b_key" onClick={clickKey}></button>
          <button value="B4" className="w_key" onClick={clickKey}>B</button>
          <button value="C5" className="w_key" onClick={clickKey}>C</button>
        </div>
        <div id="chord_type">
          <section id="chord_text">
            <h2 id="chord_type">{chordValue}</h2>
            <p id="chord_keys">構成音: {chordKeys}</p>
            <p id="chord_name">{rootKey}{chordName}: {chordsInterval}</p>
          </section>
          <div id="chord_types">
            <dl>
              <dt>根音</dt>
              <dd>
                <label><input type="radio" id="chord_R" name="chord_type" value="ルート" onChange={chordTypeSelect} defaultChecked />(R)</label>
                <label><input type="radio" id="chord_5" name="chord_type" value="パワーコード" onChange={chordTypeSelect} />5</label>
              </dd>
            </dl>
            <dl>
              <dt>三和音</dt>
              <dd>
                <label><input type="radio" id="chord_M" name="chord_type" value="メジャー" onChange={chordTypeSelect} />(M)</label>
                <label><input type="radio" id="chord_m" name="chord_type" value="マイナー" onChange={chordTypeSelect} />m</label>
                <label><input type="radio" id="chord_dim" name="chord_type" value="ディミニッシュ" onChange={chordTypeSelect} />dim</label>
                <label><input type="radio" id="chord_aug" name="chord_type" value="オーギュメント" onChange={chordTypeSelect} />aug</label>
                <label><input type="radio" id="chord_sus4" name="chord_type" value="サスペンデッド4th" onChange={chordTypeSelect} />sus4</label>
              </dd>
            </dl>
            <dl>
              <dt>四和音</dt>
              <dd>
                <label><input type="radio" id="chord_M7" name="chord_type" value="メジャーセブンス" onChange={chordTypeSelect} />M7</label>
                <label><input type="radio" id="chord_7" name="chord_type" value="セブンス" onChange={chordTypeSelect} />7</label>
                <label><input type="radio" id="chord_mM7" name="chord_type" value="マイナー・メジャー・セブンス" onChange={chordTypeSelect} />mM7</label>
                <label><input type="radio" id="chord_m7" name="chord_type" value="マイナー・セブンス" onChange={chordTypeSelect} />m7</label>
                <label><input type="radio" id="chord_m7-5" name="chord_type" value="マイナー・セブンス・フラット・ファイブ" onChange={chordTypeSelect} />m7(-5)</label>
                <label><input type="radio" id="chord_dim7" name="chord_type" value="ディミニッシュ・セブンス" onChange={chordTypeSelect} />dim7</label>
                <label><input type="radio" id="chord_augM7" name="chord_type" value="オーグメント・メジャー・セブンス" onChange={chordTypeSelect} />augM7</label>
                <label><input type="radio" id="chord_aug7" name="chord_type" value="オーギュメント・セブンス" onChange={chordTypeSelect} />aug7</label>
                <label><input type="radio" id="chord_M7sus4" name="chord_type" value="メジャー・セブンス・サスペンデッド4th" onChange={chordTypeSelect} />M7sus4</label>
                <label><input type="radio" id="chord_7sus4" name="chord_type" value="セブンス・サスペンデッド4th" onChange={chordTypeSelect} />7sus4</label>
                <label><input type="radio" id="chord_6" name="chord_type" value="シックスス" onChange={chordTypeSelect} />6</label>
                <label><input type="radio" id="chord_m6" name="chord_type" value="マイナー・シックスス" onChange={chordTypeSelect} />m6</label>
              </dd>
            </dl>
            <dl>
              <dt>五和音</dt>
              <dd>
                <label><input type="radio" id="chord_M9" name="chord_type" value="メジャーナインス¥" onChange={chordTypeSelect} />M9</label>
                <label><input type="radio" id="chord_9" name="chord_type" value="ナインス" onChange={chordTypeSelect} />9</label>
                <label><input type="radio" id="chord_7_f9" name="chord_type" value="セブンス・フラット・ナインス" onChange={chordTypeSelect} />7(-9)</label>
                <label><input type="radio" id="chord_7_s9" name="chord_type" value="セブンス・シャープ・ナインス" onChange={chordTypeSelect} />7(+9)</label>
                <label><input type="radio" id="chord_m7_11" name="chord_type" value="マイナー・セブンス・イレブンス" onChange={chordTypeSelect} />m7(11)</label>
                <label><input type="radio" id="chord_7_s11" name="chord_type" value="セブンス・シャープ・イレブンス" onChange={chordTypeSelect} />7(+11)</label>
                <label><input type="radio" id="chord_M7_13" name="chord_type" value="メジャー・セブンス・サーティーンズ" onChange={chordTypeSelect} />M7(13)</label>
                <label><input type="radio" id="chord_M7_13" name="chord_type" value="セブンス・サーティーンズ" onChange={chordTypeSelect} />7(13)</label>
                <label><input type="radio" id="chord_M7_f13" name="chord_type" value="セブンス・フラット・サーティーンズ" onChange={chordTypeSelect} />7(-13)</label>
                <label><input type="radio" id="chord_69" name="chord_type" value="シックス・ナインス" onChange={chordTypeSelect} />69</label>
                <label><input type="radio" id="chord_m69" name="chord_type" value="マイナー・シックス・ナインス" onChange={chordTypeSelect} />m69</label>
              </dd>
            </dl>
          </div>
        </div>
      </CoadPlayer>
    </>
  );
}

export default Inner;
