import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is React.js?',
			answerOptions: ['Open-source JavaScript back-end library','JavaScript front-end library to create a database','Free and open-source JavaScript front-end library','None of the mentioned'],
			right: "Free and open-source JavaScript front-end library",
		},
		{
			questionText: 'Which of the following acts as the input of a class-based component?',
			answerOptions: ['Class','Props','Factory','None of the mentioned'],
			right: "Props",
		},
		{
			questionText: 'React.js is written in which of the following language?',
			answerOptions: ['C','C++','JavaScript','Java'], 
			right: "JavaScript",
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (checkAnswer,answer) => {
		if (checkAnswer === answer) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, index) => (
							<button key={index} onClick={() => handleAnswerOptionClick(questions[currentQuestion].right,answerOption)}>{answerOption}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
