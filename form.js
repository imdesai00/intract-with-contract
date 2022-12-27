import React,{useState} from 'react';
import Web3 from 'web3';

function Form() {

  var web3 = new Web3('blockchian link');
  var trial = new web3.eth.Contract('abi', 'contract address', {
    from: '', // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
  });

  let name,value;
  const [data,setData] = useState({fname:"",lname:""});

  const handleInput = event =>{

    name = event.target.name;
    value = event.target.value;

    setData({...data, [name]:value});
  }

  function handleClick(){
    console.log(data)
  }

  function handelClicke() {
    window.ethereum.request({method:'eth_requestAccounts'})
      .then(res=>{
        console.log(res) 
      })
  }

  function handleClick1(){
    trial.methods.setdata(data.fname,data.lname).send({from :''})
  }

  function handleClick2(){
    trial.methods.getdata().call().then(console.log);
  }

  return (
    <div className="app">
        <button onClick={handelClicke} type="submit">Connect</button>
        <div className='container'>
            <input className="form-control rounded" type="text" autoComplete="off" name="fname" onChange={handleInput} value={data.name} id="name" placeholder="Enter first name" />
            <br/>
            <input className="form-control rounded" type="text" autoComplete="off" name="lname" onChange={handleInput} value={data.name} id="lname" placeholder="Enter last name" />
            <br/>
            <button onClick={handleClick}>Get older! </button>
            <br/>
            <button onClick={handleClick1}>set data to contract </button>
            <br/>
            <button onClick={handleClick2}>get data from contract </button>
        </div>
    </div>
  )
}

Form.propTypes = {

}

export default Form
