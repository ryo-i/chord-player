import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import { inner } from '../data/data.json';
import * as Tone from 'tone';


// CSS in JS
const CoadPlayer = styled.section`
  h2, #chord_type, #chord_type_text {
    text-align: center;
  }

  form {
    margin: 0 auto ;
    max-width: 400px;
    border: 1px solid #ccc;
    padding: 10px 10px 0;
    text-align: left;
    dl {
      padding: 5px 0 0;
      display: flex;
      margin: 0;
      :not(:last-child) {
        border-bottom: 1px solid #eee;
      }
    }
    dt {
      font-weight: bold;
      width: 15%;
    }
    dd {
      margin: 0;
      display: inline-block;
      width: 85%;
    }
  }

  label {
    margin: 0 10px 10px 0;
    display: inline-block;
    :hover {
      cursor: pointer;
    }
  }

  #key {
    background: #333;
    padding: 10px;
    width: 300px;
    display: block;
    margin: 0 auto;
    position: relative;
  }

  .w_key {
    background: #FFF;
    border: 1px solid #333;
    width: 35px;
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
  .b_key:hover {
    opacity: 0.7;
  }

  #chord_type_text {
    font-size: 20px;
    margin: 10px 0 0;
  }

  #chord_keys_text {
    margin: 0 0 10px;
  }
`;


// Component
function Inner() {
  // Hooks
  const [chordValue, setChordValue] = useState('ルート');
  const [chordName, setChordName] = useState('R');
  const [chordKeys, setChordKeys] = useState('1');
  const [chords, setChords] = useState([]);

  // コード初期設定
  const Key = [
    ['C4'],
    ['C#4'],
    ['D4'],
    ['D#4'],
    ['E4'],
    ['F4'],
    ['F#4'],
    ['G4'],
    ['G#4'],
    ['A4'],
    ['A#4'],
    ['B4'],
    ['C5']
  ];
  useEffect(() => {
    setChords(Key);
  }, []);

  //音階
  var scale　= [
    //休符
    'null',
    //1オクターブ目
    'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4',
    //2オクターブ目
    'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5',
    //3オクターブ目
    'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6',
  ];

  //コードタイプ
  var chordTypes = [
      {
        'chordValue': 'ルート',
        'chordName': 'R',
        'chordKeys': [1]
      },
      {
        'chordValue': 'パワーコード',
        'chordName': '5',
        'chordKeys': [1,8]
      },
      {
        'chordValue': 'メジャー',
        'chordName': 'M',
        'chordKeys': [1,5,8]
      },
      {
        'chordValue': 'マイナー',
        'chordName': 'm',
        'chordKeys': [1,4,8]
      },
      {
        'chordValue': 'ディミニッシュ',
        'chordName': 'dim',
        'chordKeys': [1,4,7]
      },
      {
        'chordValue': 'オーギュメント',
        'chordName': 'aug',
        'chordKeys': [1,5,9]
      },
      {
        'chordValue': 'サスペンデッド4th',
        'chordName': 'sus4',
        'chordKeys': [1,6,8]
      },
      {
        'chordValue': 'メジャーセブンス',
        'chordName': 'M7',
        'chordKeys': [1,5,8,12]
      },
      {
        'chordValue': 'セブンス',
        'chordName': '7',
        'chordKeys': [1,5,8,11]
      },
      {
        'chordValue': 'マイナー・メジャー・セブンス',
        'chordName': 'mM7',
        'chordKeys': [1,4,8,12]
      },
      {
        'chordValue': 'マイナー・セブンス',
        'chordName': 'm7',
        'chordKeys': [1,4,8,11]
      },
      {
        'chordValue': 'マイナー・セブンス・フラット・ファイブ',
        'chordName': 'm7(-5)',
        'chordKeys': [1,4,7,11]
      },
      {
        'chordValue': 'ディミニッシュ・セブンス',
        'chordName': 'dim7',
        'chordKeys': [1,4,7,10]
      },
      {
        'chordValue': 'オーグメント・メジャー・セブンス',
        'chordName': 'augM7',
        'chordKeys': [1,5,9,12]
      },
      {
        'chordValue': 'オーギュメント・セブンス',
        'chordName': 'aug7',
        'chordKeys': [1,5,9,11]
      },
      {
        'chordValue': 'メジャー・セブンス・サスペンデッド4th',
        'chordName': 'M7sus4',
        'chordKeys': [1,6,8,12]
      },
      {
        'chordValue': 'セブンス・サスペンデッド4th',
        'chordName': '7sus4',
        'chordKeys': [1,6,8,11]
      },
      {
        'chordValue': 'シックスス',
        'chordName': '6',
        'chordKeys': [1,5,8,10]
      },
      {
        'chordValue': 'マイナー・シックスス',
        'chordName': 'm6',
        'chordKeys': [1,4,8,10]
      },
      {
        'chordValue': 'メジャーナインス',
        'chordName': 'M9',
        'chordKeys': [1,5,8,12,15]
      },
      {
        'chordValue': 'ナインス',
        'chordName': '9',
        'chordKeys': [1,5,8,11,15]
      },
      {
        'chordValue': 'セブンス・フラット・ナインス',
        'chordName': '7(-9)',
        'chordKeys': [1,5,8,11,14]
      },
      {
        'chordValue': 'セブンス・シャープ・ナインス',
        'chordName': '7(+9)',
        'chordKeys': [1,5,8,11,16]
      },
      {
        'chordValue': 'マイナー・セブンス・イレブンス',
        'chordName': 'm7(11)',
        'chordKeys': [1,4,8,11,18]
      },
      {
        'chordValue': 'セブンス・シャープ・イレブンス',
        'chordName': '7(+11)',
        'chordKeys': [1,5,8,11,19]
      },
      {
        'chordValue': 'メジャー・セブンス・サーティーンズ',
        'chordName': 'M7(13)',
        'chordKeys': [1,5,8,12,22]
      },
      {
        'chordValue': 'セブンス・サーティーンズ',
        'chordName': '7(13)',
        'chordKeys': [1,5,8,11,22]
      },
      {
        'chordValue': 'セブンス・フラット・サーティーンズ',
        'chordName': '7(-13)',
        'chordKeys': [1,5,8,11,21]
      },
      {
        'chordValue': 'シックス・ナインス',
        'chordName': '69',
        'chordKeys': [1,5,8,10,15]
      },
      {
        'chordValue': 'マイナー・シックス・ナインス',
        'chordName': 'm69',
        'chordKeys': [1,4,8,10,15]
      },
  ];

  //和音
  const getChords = (chordTypes) => {
    let getChords = [];
    for (let i = 0 ; i < Key.length; i++ ) {
      getChords.push( [] );
      for (var  j = 0; j < chordTypes['chordKeys'].length; j++){
        const nmb = scale[i+chordTypes['chordKeys'][j]];
        getChords[i].push(nmb);
      }
    }
    return getChords;
  };

  //コードタイプ設定
  const chordTypeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getChordValue = e.target.value;
    console.log('getChordValue', getChordValue);
    let getchordTypes;
    for(let i = 0; i < chordTypes.length; i++){
      if(chordTypes[i].chordValue === getChordValue) {
        getchordTypes = chordTypes[i];
        setChordValue(getchordTypes.chordValue);
        setChordName(getchordTypes.chordName);
        setChordKeys(getchordTypes.chordKeys.join(', '));
      }
    }

    const getThisChords = getChords(getchordTypes);
    setChords(getThisChords);
    console.log('getThisChords', getThisChords);
  }

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

    const synth = new Tone.PolySynth().toDestination();
    synth.triggerAttackRelease(getChord, '4n');
  }

  // JSX
  return (
    <>
      <CoadPlayer>
        <h2>和音鍵盤</h2>
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
          <p id="chord_type_text">{chordValue}({chordName})</p>
          <p id="chord_keys_text">構成音:{chordKeys}</p>
          <form name="chord_types" className="">
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
          </form>
        </div>
      </CoadPlayer>
    </>
  );
}

export default Inner;
