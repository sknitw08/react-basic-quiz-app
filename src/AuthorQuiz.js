import React from 'react';
import  { Link }  from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function Hero(props) {
  return(
    <div className = "row">
      <div className = "jumbotron col-10 offset-1">
        <h1> Author Quiz </h1>
          <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
}

function Book({title, onClick}) {
  return(
    <div className = "answer" onClick= {() => {onClick(title);}}>
      <h4> {title} </h4>
    </div>
  );
}

function Turn({author, books, highlight, onAnswerSelected}) {
  function highlightToBgColor(highlight) {
    const mapping = {
      'none' : '',
      'correct' : 'green',
      'wrong' : 'red'
    }
    return mapping[highlight];
  }
  return(
    <div className = "row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
      <div className = "col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author"/>
      </div>
      <div className = "col-6 offset-1">
        {books.map((title)=><Book title ={title} key={title} onClick={onAnswerSelected} />)}
      </div>
    </div>
  );
}

function Continue({ show, onContinue }) {
  return(
    <div className = "row continue">
    { show 
      ? <div className="col-11">
          <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
        </div>
      : null 
    }
    </div>
  );
}

function Footer(props) {
  return(
    <div id="footer" className = "row">
      <div className="col-12 offset-1">
        <p className="text-muted credit">All images are from <a href="http://commons.wikimedia.org/wiki"> WikiMedia Commons </a> and are in the public domain</p>
      </div>
    </div>
  );
}

function AuthorQuiz({turnData, highlight, onAnswerSelected, onContinue}) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
      <Continue show={highlight === 'correct'} onContinue = {onContinue} />
      <p className ="offset-1"><Link to="/add">Add an Author</Link></p>
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
