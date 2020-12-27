import React,{Component} from 'react';
import './FrontView.css'
class FrontView extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            answer:'0',
            first:'',
            second:'',
            symbol:''
        }   
    }
    clearState = () =>
    {
        this.setState({
            ...this.state,
            answer:'0',
            first:'',
            second:'',
            symbol:''
        })
    }
    findanswer =(f,s,sy='')=>{
        switch(sy)
        {
            case '+': return (parseFloat(f)+parseFloat(s));
            case '-': return (parseFloat(f)-parseFloat(s));
            case '*': return (parseFloat(f)*parseFloat(s));
            case '/': return (parseFloat(f)/parseFloat(s));
            default: return ('')
        }
    }
    addSymbol=(props)=>
    {
        if(this.state.symbol==='')
        {
            this.setState({
                ...this.state,
                symbol:props,
            })
        }
        else
        {
            var ans=this.findanswer(this.state.first,this.state.answer,this.state.symbol);
            this.setState({
                ...this.state,
                second:'',
                first:'',
                answer:ans,
                symbol:props
            })
        }
    }
    addNumber=(props)=>
    {
        if(this.state.answer==='0')
        {
            this.setState({
                ...this.state,
                answer:props
            })
        }
        else
        {
            if(this.state.first==='' && this.state.symbol!=='')
            {
                this.setState({
                    ...this.state,
                    first:this.state.answer,
                    answer:props
                })
            }
            else{
                this.setState({
                    ...this.state,
                    answer:this.state.answer+props.toString()
                })
            }
           
        }
    }
    findResult=() =>
    {
        var ans=this.findanswer(this.state.first,this.state.answer,this.state.symbol);
        this.setState({
            ...this.state,
            answer:ans,
            first:'',
            second:'',
            symbol:''
        })
    }
    render()
    {
        return(
            <div className="my-calci-box p-5 m-5">
                <label className="answer-box m-1">
                    {this.state.answer}
                </label>
                <div>
                    <button onClick={()=>this.addNumber(9)} className="btn btn-secondary m-2" id="9" value="9">9</button>
                    <button onClick={()=>this.addNumber(8)} className="btn btn-secondary m-2" id="8" value="8">8</button>
                    <button onClick={()=>this.addNumber(7)} className="btn btn-secondary m-2" id="7" value="7">7</button>
                    <button onClick={()=>this.addSymbol('/')} className="btn btn-danger m-2" id="/" value="/">/</button>
                    <br></br>
                    <button onClick={()=>this.addNumber(6)} className="btn btn-secondary m-2" id="6" value="6">6</button>
                    <button onClick={()=>this.addNumber(5)} className="btn btn-secondary m-2" id="5" value="5">5</button>
                    <button onClick={()=>this.addNumber(4)} className="btn btn-secondary m-2" id="4" value="4">4</button>
                    <button onClick={()=>this.addSymbol('*')} className="btn btn-danger m-2" id="*" value="*">*</button>
                    <br></br>
                    <button onClick={()=>this.addNumber(3)} className="btn btn-secondary m-2" id="3" value="3">3</button>
                    <button onClick={()=>this.addNumber(2)} className="btn btn-secondary m-2" id="2" value="2">2</button>
                    <button onClick={()=>this.addNumber(1)} className="btn btn-secondary m-2" id="1" value="1">1</button>
                    <button onClick={()=>this.addSymbol('+')} className="btn btn-danger m-2" id="+" value="+">+</button>
                    <br></br>
                    <button onClick={()=>this.clearState()}className="btn btn-secondary m-2" id="C" value="C">C</button>
                    <button onClick={()=>this.addNumber(0)} className="btn btn-secondary m-2" id="0" value="0">0</button>
                    <button onClick={()=>this.addNumber('.')}className="btn btn-secondary m-2" id="." value=".">.</button>
                    <button onClick={()=>this.addSymbol('-')} className="btn btn-danger m-2" id="-" value="-">-</button>
                    <br></br>
                    <button onClick={()=>this.findResult()} className="btn btn-success m-2" id="=" value="=">=</button>
                </div>
            </div>
        )
    }
}
export default FrontView