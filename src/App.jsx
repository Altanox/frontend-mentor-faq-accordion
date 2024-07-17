import PropTypes from 'prop-types';
import { useState } from 'react';

import IconStar from './assets/images/icon-star.svg';
import IconPlus from './assets/images/icon-plus.svg';
import IconMinus from './assets/images/icon-minus.svg';

const questionsInitial = [
  {
    id: 1,
    question: 'What is Frontend Mentor, and how will it help me?',
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    isOpen: true,
  },
  {
    id: 2,
    question: 'Is Frontend Mentor free?',
    answer:
      'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
    isOpen: false,
  },
  {
    id: 3,
    question: 'Can I use Frontend Mentor projects in my portfolio?',
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    isOpen: false,
  },
  {
    id: 4,
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    isOpen: false,
  },
];

function App() {
  const [questions, setQuestions] = useState(questionsInitial);

  function handleQuestionToggle(questionId) {
    setQuestions((items) =>
      items.map((item) =>
        item.id === questionId
          ? { ...item, isOpen: !item.isOpen }
          : { ...item, isOpen: false }
      )
    );
  }

  return (
    <>
      <div className='background-image'></div>
      <div className='container'>
        <Card
          questions={questions}
          setQuestions={setQuestions}
          onToggleItem={handleQuestionToggle}
        />
      </div>
    </>
  );
}

const Card = ({ questions, onToggleItem }) => {
  return (
    <div className='card'>
      <header className='row card--heading'>
        <img src={IconStar} /> <h1>FAQs</h1>
      </header>
      <section>
        <ol className='questions'>
          {questions.map((question) => (
            <Question
              key={question.id}
              question={question}
              onToggleItem={onToggleItem}
            />
          ))}
        </ol>
      </section>
    </div>
  );
};

const Question = ({ question, onToggleItem }) => {
  return (
    <li className='question'>
      <div
        className='question--header'
        onClick={() => onToggleItem(question.id)}
      >
        <h2 className='question--question'>{question.question}</h2>
        <img
          src={question.isOpen ? IconMinus : IconPlus}
          className={`question--image ${
            question.isOpen ? 'active' : 'inactive'
          }`}
        />
      </div>
      {question.isOpen && <p className='question--answer'>{question.answer}</p>}
    </li>
  );
};

Card.propTypes = {
  questions: PropTypes.array,
  onToggleItem: PropTypes.func,
};

Question.propTypes = {
  onToggleItem: PropTypes.func,
  question: PropTypes.object,
};

export default App;
