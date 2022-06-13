import React, { Component } from 'react';
import { connect } from 'react-redux';
const myBg = require('./imageLucky/bgGame.png');
const divStyle = {
    backgroundImage: `url(${myBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '700px',
}
class MainLucky extends Component {
    
    handleChoseEvent = (click) => {
        console.log(click);
        this.setState({choseEvent: click});
    }

    render() {
       const { onChose, } = this.props;
        return (
            <div className="container" style={divStyle}> 
                <h1 className="text-center">GAME ĐỔ XÚC XẮC</h1>
                <button className="btn btn-info" onClick="handleChoseEvent()" > TÀI</button>
                <button className="btn btn-info" onClick={() => onChose()} >XỈU</button>
                <h2>BẠN CHỌN : <span></span></h2>
                <h2>Số bàn thắng : <span></span></h2>
                <h2>Tổng số bàn chơi : <span></span></h2>
                <button className="btn btn-success" >Play Game</button>
            </div>
        )
    }
};
const mapStateProps = (state) => {
    return {
        
    }
}
export default MainLucky;
