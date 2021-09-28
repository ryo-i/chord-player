import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import { inner } from '../data/data.json';
import * as Tone from 'tone';


// CSS in JS
const CoadPlayer = styled.section`
  h2, #code_type, #code_type_text {
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

  #code_type_text {
    font-size: 20px;
    margin: 10px 0 0;
  }

  #code_keys_text {
    margin: 0 0 10px;
  }
`;


// Component
function Inner() {
  // Hooks
  const [codeValue, setCodeValue] = useState('ルート');
  const [codeName, setCodeName] = useState('R');
  const [codeKeys, setCodeKeys] = useState('1');
  const [chords, setChords] = useState([]);


  // Tone.js Test
  const toneJsTest = () => {
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
  };

  //DOM
  // const Key = document.querySelectorAll('#piano li');
  const Key = [
    {id: "C4", className: "w_key", keyName: "C"},
    {id: "Cs4", className: "b_key", keyName: ""},
    {id: "D4", className: "w_key", keyName: "D"},
    {id: "Ds4", className: "b_key", keyName: ""},
    {id: "E4", className: "w_key", keyName: "E"},
    {id: "F4", className: "w_key", keyName: "F"},
    {id: "Fs4", className: "b_key", keyName: ""},
    {id: "G4", className: "w_key", keyName: "G"},
    {id: "Gs4", className: "b_key", keyName: ""},
    {id: "A4", className: "w_key", keyName: "A"},
    {id: "As4", className: "b_key", keyName: ""},
    {id: "B4", className: "w_key", keyName: "B"},
    {id: "C5", className: "w_key", keyName: "C"}
  ];
  // const codeTypeText = document.querySelector('#code_type_text');
  // const codeType = document.getElementsByName("code_type");
  // const codeKeysText = document.querySelector('#code_keys_text');

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
  var codeTypes = [
      {
        'codeValue': 'ルート',
        'codeName': 'R',
        'codeKeys': [1]
      },
      {
        'codeValue': 'パワーコード',
        'codeName': '5',
        'codeKeys': [1,8]
      },
      {
        'codeValue': 'メジャー',
        'codeName': 'M',
        'codeKeys': [1,5,8]
      },
      {
        'codeValue': 'マイナー',
        'codeName': 'm',
        'codeKeys': [1,4,8]
      },
      {
        'codeValue': 'ディミニッシュ',
        'codeName': 'dim',
        'codeKeys': [1,4,7]
      },
      {
        'codeValue': 'オーギュメント',
        'codeName': 'aug',
        'codeKeys': [1,5,9]
      },
      {
        'codeValue': 'サスペンデッド4th',
        'codeName': 'sus4',
        'codeKeys': [1,6,8]
      },
      {
        'codeValue': 'メジャーセブンス',
        'codeName': 'M7',
        'codeKeys': [1,5,8,12]
      },
      {
        'codeValue': 'セブンス',
        'codeName': '7',
        'codeKeys': [1,5,8,11]
      },
      {
        'codeValue': 'マイナー・メジャー・セブンス',
        'codeName': 'mM7',
        'codeKeys': [1,4,8,12]
      },
      {
        'codeValue': 'マイナー・セブンス',
        'codeName': 'm7',
        'codeKeys': [1,4,8,11]
      },
      {
        'codeValue': 'マイナー・セブンス・フラット・ファイブ',
        'codeName': 'm7(-5)',
        'codeKeys': [1,4,7,11]
      },
      {
        'codeValue': 'ディミニッシュ・セブンス',
        'codeName': 'dim7',
        'codeKeys': [1,4,7,10]
      },
      {
        'codeValue': 'オーグメント・メジャー・セブンス',
        'codeName': 'augM7',
        'codeKeys': [1,5,9,12]
      },
      {
        'codeValue': 'オーギュメント・セブンス',
        'codeName': 'aug7',
        'codeKeys': [1,5,9,11]
      },
      {
        'codeValue': 'メジャー・セブンス・サスペンデッド4th',
        'codeName': 'M7sus4',
        'codeKeys': [1,6,8,12]
      },
      {
        'codeValue': 'セブンス・サスペンデッド4th',
        'codeName': '7sus4',
        'codeKeys': [1,6,8,11]
      },
      {
        'codeValue': 'シックスス',
        'codeName': '6',
        'codeKeys': [1,5,8,10]
      },
      {
        'codeValue': 'マイナー・シックスス',
        'codeName': 'm6',
        'codeKeys': [1,4,8,10]
      },
      {
        'codeValue': 'メジャーナインス',
        'codeName': 'M9',
        'codeKeys': [1,5,8,12,15]
      },
      {
        'codeValue': 'ナインス',
        'codeName': '9',
        'codeKeys': [1,5,8,11,15]
      },
      {
        'codeValue': 'セブンス・フラット・ナインス',
        'codeName': '7(-9)',
        'codeKeys': [1,5,8,11,14]
      },
      {
        'codeValue': 'セブンス・シャープ・ナインス',
        'codeName': '7(+9)',
        'codeKeys': [1,5,8,11,16]
      },
      {
        'codeValue': 'マイナー・セブンス・イレブンス',
        'codeName': 'm7(11)',
        'codeKeys': [1,4,8,11,18]
      },
      {
        'codeValue': 'セブンス・シャープ・イレブンス',
        'codeName': '7(+11)',
        'codeKeys': [1,5,8,11,19]
      },
      {
        'codeValue': 'メジャー・セブンス・サーティーンズ',
        'codeName': 'M7(13)',
        'codeKeys': [1,5,8,12,22]
      },
      {
        'codeValue': 'セブンス・サーティーンズ',
        'codeName': '7(13)',
        'codeKeys': [1,5,8,11,22]
      },
      {
        'codeValue': 'セブンス・フラット・サーティーンズ',
        'codeName': '7(-13)',
        'codeKeys': [1,5,8,11,21]
      },
      {
        'codeValue': 'シックス・ナインス',
        'codeName': '69',
        'codeKeys': [1,5,8,10,15]
      },
      {
        'codeValue': 'マイナー・シックス・ナインス',
        'codeName': 'm69',
        'codeKeys': [1,4,8,10,15]
      },
  ];

  //和音
  let getChords = [];
  useEffect(() => {
    for (let h = 0 ; h < codeTypes.length; h++ ) {
      getChords.push( [] );
      for (let i = 0 ; i < Key.length; i++ ) {
        getChords[h].push( [] );
        for (var  j = 0; j < codeTypes[h]['codeKeys'].length; j++){
          const nmb = scale[i+codeTypes[h]['codeKeys'][j]];
          getChords[h][i].push(nmb);
        }
      }
    }
    console.log(getChords);
  }, []);
  // setChords(getChords);

  //コードタイプ設定
  function codeTypeSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const getCodeValue = e.target.value;
    console.log('getCodeValue', getCodeValue);
    for(let i = 0; i < codeTypes.length; i++){
      if(codeTypes[i].codeValue === getCodeValue) {
        const getcodeTypes = codeTypes[i];
        setCodeValue(getcodeTypes.codeValue);
        setCodeName(getcodeTypes.codeName);
        setCodeKeys(getcodeTypes.codeKeys.join(', '));
      }
    }
  }

  //シンセ生成
  let synth;
  useEffect(() => {
    synth = new Tone.PolySynth().toDestination();
  }, []);

  //イベントリスナ
  function clickKey(e) {
    const KeyValue = e.target.value;
    console.log('KeyValue', KeyValue);
    synth.triggerAttackRelease(KeyValue, '4n');
    // toneJsTest();
    /* for (let i = 0; i < Key.length; i++) {
      (function(i) {
        Key[i].addEventListener('click', function () {
        //チェックされているコードタイプを確認
        var seletcCords = codeTypeSelect();
        //メジャーコードが4分音符の長さ鳴る
        synth.triggerAttackRelease(seletcCords[i], '4n');
        }, false);
      })(i);
    } */
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
        <div id="code_type">
          <p id="code_type_text">{codeValue}({codeName})</p>
          <p id="code_keys_text">構成音:{codeKeys}</p>
          <form name="code_types" className="">
            <dl>
              <dt>根音</dt>
              <dd>
                <label><input type="radio" id="code_R" name="code_type" value="ルート" onChange={codeTypeSelect} defaultChecked />(R)</label>
                <label><input type="radio" id="code_5" name="code_type" value="パワーコード" onChange={codeTypeSelect} />5</label>
              </dd>
            </dl>
            <dl>
              <dt>三和音</dt>
              <dd>
                <label><input type="radio" id="code_M" name="code_type" value="メジャー" onChange={codeTypeSelect} />(M)</label>
                <label><input type="radio" id="code_m" name="code_type" value="マイナー" onChange={codeTypeSelect} />m</label>
                <label><input type="radio" id="code_dim" name="code_type" value="ディミニッシュ" onChange={codeTypeSelect} />dim</label>
                <label><input type="radio" id="code_aug" name="code_type" value="オーギュメント" onChange={codeTypeSelect} />aug</label>
                <label><input type="radio" id="code_sus4" name="code_type" value="サスペンデッド4th" onChange={codeTypeSelect} />sus4</label>
              </dd>
            </dl>
            <dl>
              <dt>四和音</dt>
              <dd>
                <label><input type="radio" id="code_M7" name="code_type" value="メジャーセブンス" onChange={codeTypeSelect} />M7</label>
                <label><input type="radio" id="code_7" name="code_type" value="セブンス" onChange={codeTypeSelect} />7</label>
                <label><input type="radio" id="code_mM7" name="code_type" value="マイナー・メジャー・セブンス" onChange={codeTypeSelect} />mM7</label>
                <label><input type="radio" id="code_m7" name="code_type" value="マイナー・セブンス" onChange={codeTypeSelect} />m7</label>
                <label><input type="radio" id="code_m7-5" name="code_type" value="マイナー・セブンス・フラット・ファイブ" onChange={codeTypeSelect} />m7(-5)</label>
                <label><input type="radio" id="code_dim7" name="code_type" value="ディミニッシュ・セブンス" onChange={codeTypeSelect} />dim7</label>
                <label><input type="radio" id="code_augM7" name="code_type" value="オーグメント・メジャー・セブンス" onChange={codeTypeSelect} />augM7</label>
                <label><input type="radio" id="code_aug7" name="code_type" value="オーギュメント・セブンス" onChange={codeTypeSelect} />aug7</label>
                <label><input type="radio" id="code_M7sus4" name="code_type" value="メジャー・セブンス・サスペンデッド4th" onChange={codeTypeSelect} />M7sus4</label>
                <label><input type="radio" id="code_7sus4" name="code_type" value="セブンス・サスペンデッド4th" onChange={codeTypeSelect} />7sus4</label>
                <label><input type="radio" id="code_6" name="code_type" value="シックスス" onChange={codeTypeSelect} />6</label>
                <label><input type="radio" id="code_m6" name="code_type" value="マイナー・シックスス" onChange={codeTypeSelect} />m6</label>
              </dd>
            </dl>
            <dl>
              <dt>五和音</dt>
              <dd>
                <label><input type="radio" id="code_M9" name="code_type" value="メジャーナインス¥" onChange={codeTypeSelect} />M9</label>
                <label><input type="radio" id="code_9" name="code_type" value="ナインス" onChange={codeTypeSelect} />9</label>
                <label><input type="radio" id="code_7_f9" name="code_type" value="セブンス・フラット・ナインス" onChange={codeTypeSelect} />7(-9)</label>
                <label><input type="radio" id="code_7_s9" name="code_type" value="セブンス・シャープ・ナインス" onChange={codeTypeSelect} />7(+9)</label>
                <label><input type="radio" id="code_m7_11" name="code_type" value="マイナー・セブンス・イレブンス" onChange={codeTypeSelect} />m7(11)</label>
                <label><input type="radio" id="code_7_s11" name="code_type" value="セブンス・シャープ・イレブンス" onChange={codeTypeSelect} />7(+11)</label>
                <label><input type="radio" id="code_M7_13" name="code_type" value="メジャー・セブンス・サーティーンズ" onChange={codeTypeSelect} />M7(13)</label>
                <label><input type="radio" id="code_M7_13" name="code_type" value="セブンス・サーティーンズ" onChange={codeTypeSelect} />7(13)</label>
                <label><input type="radio" id="code_M7_f13" name="code_type" value="セブンス・フラット・サーティーンズ" onChange={codeTypeSelect} />7(-13)</label>
                <label><input type="radio" id="code_69" name="code_type" value="シックス・ナインス" onChange={codeTypeSelect} />69</label>
                <label><input type="radio" id="code_m69" name="code_type" value="マイナー・シックス・ナインス" onChange={codeTypeSelect} />m69</label>
              </dd>
            </dl>
          </form>
        </div>
      </CoadPlayer>
    </>
  );
}

export default Inner;
