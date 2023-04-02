import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Row from './Row'
import btc from '../Images/bitcoinimg.png'
import eth from '../Images/ethereumimg.png'
import bnb from '../Images/binanceimg.png'
import atom from '../Images/atomimg.png'
import ltc from '../Images/ltcimg.webp'
import avax from '../Images/avaximg.png'
import Footer from './Footer'
export default function Market() {
  let userData;
  let ar;

  const [d, setD] = useState([]);
  const [name, setName] = useState(null);
    const getCompany = async (url) => {
      // console.log('get data called\n')
      const Data = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
       
           
        })
      })
        .then(res => res.json())
        .then(Data => {
          // console.log(Data)
          userData = Data;
          // console.log(userData[0].Name);
          setName(userData[0].Name)
          // document.getElementById('para').innerHTML='binance'
          setD(userData);
          // ar = d[0];
          // console.log(ar.Name);
          // console.log(d[0])
        });
  }
  getCompany('http://localhost:5000/getCoin');

  const getQuote = () => {

    // console.log(typeof (userData[0].Name))
   
      // axios.post('http://localhost:5000/getCoin')
      //   .then(res => {
      //   // console.log(res.data.recordsets[0])
      //     let arr = res.data.recordsets[0];
      //     console.log(arr[0])
      //     // document.getElementById('para').innerHTML = res.data.recordsets[0][0].Cname;
      //   }).catch(err => {
      //   console.log(err)
      // })
   

      let crypto = document.getElementById("crypto").value;
      crypto = crypto.toString();
      let original = document.getElementById("original").value;
      original = original.toString();
      let input = document.getElementById("input").value;
      input = parseInt(input);
      if (crypto == "btc") {
        switch (original) {
          case 'usd':
            let num = input * d[0].currValue;
            num = num.toString();
            document.getElementById("output").value = num;
            break;
          case 'euro':
            let num1 = input * d[0].currValue*0.92;
            num1 = num1.toString();
            document.getElementById("output").value = num1;
            break;
          case 'pkr':
            let num2 = input * d[0].currValue*265.5;
            num2 = num2.toString();
            document.getElementById("output").value = num2;
            break;
          default:
            break;
        }

      }
      else if (crypto == "eth") {
        switch (original) {
          case 'usd':
            let num = input * d[1].currValue;
            num = num.toString();
            document.getElementById("output").value = num;
            break;
          case 'euro':
            let num1 = input * d[1].currValue*0.92;
            num1 = num1.toString();
            document.getElementById("output").value = num1;
            break;
          case 'pkr':
            let num2 = input * d[1].currValue*265.5;
            num2 = num2.toString();
            document.getElementById("output").value = num2;
            break;
          default:
            break;
        }

      }
      else if (crypto == "bnb") {
        switch (original) {
          case 'usd':
            let num = input * d[2].currValue;
            num = num.toString();
            document.getElementById("output").value = num;
            break;
          case 'euro':
            let num1 = input * d[2].currValue*0.92;
            num1 = num1.toString();
            document.getElementById("output").value = num1;
            break;
          case 'pkr':
            let num2 = input * d[2].currValue*265.5;
            num2 = num2.toString();
            document.getElementById("output").value = num2;
            break;
          default:
            break;
        }

      }
      else if (crypto == "atom") {
        switch (original) {
          case 'usd':
            let num = input * d[3].currValue;
            num = num.toString();
            document.getElementById("output").value = num;
            break;
          case 'euro':
            let num1 = input *d[3].currValue*0.92 ;
            num1 = num1.toString();
            document.getElementById("output").value = num1;
            break;
          case 'pkr':
            let num2 = input * d[3].currValue*265.5;
            num2 = num2.toString();
            document.getElementById("output").value = num2;
            break;
          default:
            break;
        }

      }
      else if (crypto == "ltc") {
        switch (original) {
          case 'usd':
            let num = input * d[4].currValue;
            num = num.toString();
            document.getElementById("output").value = num;
            break;
          case 'euro':
            let num1 = input * d[4].currValue*0.92;
            num1 = num1.toString();
            document.getElementById("output").value = num1;
            break;
          case 'pkr':
            let num2 = input * d[4].currValue*265.5;
            num2 = num2.toString();
            document.getElementById("output").value = num2;
            break;
          default:
            break;
        }

      }
      else {
        switch (original) {
          case 'usd':
            let num = input * d[5].currValue;
            num = num.toString();
            document.getElementById("output").value = num;
            break;
          case 'euro':
            let num1 = input * d[5].currValue*0.92;
            num1 = num1.toString();
            document.getElementById("output").value = num1;
            break;
          case 'pkr':
            let num2 = input * d[5].currValue*265.5;
            num2 = num2.toString();
            document.getElementById("output").value = num2;
            break;
          default:
            break;
        }

      }
  

    }



 
  let a;
  let items;
  let issue=()=> {

  items=userData.map((item) => {
    return item;
    
  })
    console.log(items[0])
    a = items[0].Name;
    console.log(a);
    issue()
  }
  let arr = [btc, eth, bnb, atom, ltc, avax];

    return (
      <>
        <div>
          <Navbar />
          <div style={{ marginTop: '150px' }} className="row-heading">
            <span className="n">Name</span>
            <span className="p">Price</span>
            <span className="v">1 day change</span>
            <span className="t">Details</span>
          </div>
          {/* <p id='para'>{name}</p> */}
          { d.map((coin)=>(
          <div key={coin.coin_id}>
              <Row id={coin.coin_id} img={arr[coin.coin_id - 1]} heading={coin.Name} short={coin.ticker} price={'$' + coin.currValue} change={coin.perChange} set={coin.currValue>coin.prevValue?'true':'false' } /> 
             
          </div>
          ))}
      
        </div>
        <div style={{ marginTop: '150px' }} className="converter">
          <h1>Currency Converter</h1>
          <div className="calculator">
            <input style={{ width: '100px', height: '60px' }} type="text" id="input" placeholder='Enter here' />
            <select id='crypto' name="coin" style={{ width: '100px', height: '60px' }}>
              <option value="btc" selected>BTC</option>
              <option value="eth">ETH</option>
              <option value="bnb">BNB</option>
              <option value="atom">ATOM</option>
              <option value="ltc">LTC</option>
              <option value="avax">AVAX</option>
            </select>
            <button id="con" onClick={getQuote}>Convert</button>
            <input readonly style={{ width: '135px', height: '60px' }} type="text" id="output" />
            <select id='original' name="coinconvert" style={{ width: '100px', height: '60px' }}>
              <option value="usd" selected>USD</option>
              <option value="euro">EURO</option>
              <option value="pkr">PKR</option>
            </select>
          </div>
        </div>
        <Footer />
      </>
    )
  }
