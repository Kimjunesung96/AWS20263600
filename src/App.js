import React, { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: '리액트 완벽 가이드', author: 'Maximilian', isBorrowed: false },
    { id: 2, title: '스프링 부트 실전', author: '김영한', isBorrowed: false },
    { id: 3, title: 'AWS 클라우드 아키텍처', author: 'Amazon', isBorrowed: false },
  ]);

  const toggleBorrow = (id) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, isBorrowed: !book.isBorrowed } : book
    ));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📚 미니 IT 도서관 대출 시스템</h1>
      <p>원하는 도서를 대출하거나 반납할 수 있습니다.</p>
      
      <div style={{ display: 'grid', gap: '10px', maxWidth: '400px' }}>
        {books.map(book => (
          <div key={book.id} style={{
            border: '1px solid #ccc', padding: '15px', borderRadius: '5px',
            backgroundColor: book.isBorrowed ? '#f8d7da' : '#d4edda'
          }}>
            <h3>{book.title}</h3>
            <p>저자: {book.author}</p>
            <p>상태: <strong>{book.isBorrowed ? '대출 중' : '대출 가능'}</strong></p>
            <button 
              onClick={() => toggleBorrow(book.id)}
              style={{
                padding: '10px', cursor: 'pointer', border: 'none', borderRadius: '5px',
                backgroundColor: book.isBorrowed ? '#dc3545' : '#28a745', color: 'white'
              }}
            >
              {book.isBorrowed ? '반납하기' : '대출하기'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;