import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { useTimer } from '../../../../reusables/usetimer';
import { useWordGenerator } from './wordgenerator';
import { postDashboardStats } from '../../../../services/dashstatsservice';



const SpeedTyper = () => {
  const [userInput, setUserInput] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const { time, startTimer, stopTimer, resetTimer } = useTimer(60);
  const { currentWords, generateWords } = useWordGenerator();
  const [gameState, setGameState] = useState('idle');
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [countdown, setCountdown] = useState(0); 
  const inputRef = useRef(null);  

  useEffect(() => {
    generateWords(50);
  }, [generateWords]);

  const startGame = useCallback(() => {
    setCountdown(3);
    setGameState('countdown');
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (countdown === 0 && gameState === 'countdown') {
      setGameState('playing');
      setWordIndex(0);
      setCorrectChars(0);
      setUserInput('');
      generateWords(50);
      startTimer();
      setStartTime(Date.now());

      if (inputRef.current) {
        const inputElement = inputRef.current.querySelector('input');
        if (inputElement) {
          inputElement.focus();
        }
      }
    }
  }, [countdown, gameState, generateWords, startTimer]);

  const endGame = useCallback(() => {
    setGameState('finished');
    stopTimer();
    const newWpm = calculateWPM();
    const newAccuracy = calculateAccuracy();
    setWpm(newWpm);
    setAccuracy(newAccuracy);
    postDashboard();
  }, [stopTimer]);

  useEffect(() => {
    if (time === 0) {
      endGame();
    }
  }, [time, endGame]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (gameState !== 'playing') return;
  
    if (e.key === 'Enter' || e.key === ' ') {  
      e.preventDefault();  
      const currentWord = currentWords[wordIndex];  
  
      if (userInput.trim() === currentWord) {  
        setWordIndex(wordIndex + 1);  
        setCorrectChars(correctChars + userInput.length);
        setUserInput('');  
      }
    }
  };
  useEffect(() => {
    if (gameState === 'playing' && startTime) {
      setWpm(calculateWPM());
      setAccuracy(calculateAccuracy());
    }
  }, [userInput, wordIndex]);

  const calculateWPM = () => {
    if (startTime) {
      const minutes = (Date.now() - startTime) / 60000;
      return Math.round((correctChars / 5) / minutes);
    }
    return 0;
  };

  const calculateAccuracy = () => {
    const totalChars = currentWords.slice(0, wordIndex).join(' ').length;
    return Math.round((correctChars / totalChars) * 100) || 0;
  };

  const postDashboard = async () => {
    const response = await postDashboardStats(wpm, accuracy);
    if (response.success) {
      console.log('Data posted');
    }
  };

  const resetGame = useCallback(() => {
    setGameState('idle');
    setUserInput('');
    setWordIndex(0);
    setCorrectChars(0);
    setStartTime(null);
    resetTimer();
    generateWords(50);
  }, [resetTimer, generateWords]);

  return (
    <div className="h-screen bg-white dark:bg-dark dark:text-white w-full flex items-center justify-center">
      <div className="bg-white border dark:border-white dark:bg-dark dark:text-white rounded-[10px] p-8 shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Typing Challenge</h1>

        <div className="mb-6 flex justify-between items-center">
          <div className="text-2xl font-semibold">
            {gameState === 'countdown' ? `Starting in: ${countdown}s` : `Time: ${time}s`}
          </div>
          <Button className='bg-blue rounded-[10px]' onClick={gameState === 'idle' ? startGame : resetGame}>
            {gameState === 'idle' ? 'Start Game' : 'Reset'}
          </Button>
        </div>

        <div className="bg-blue h-3 rounded-full transition-all duration-300"
          style={{ width: `${((60 - time) / 60) * 100}%` }}
        ></div>

        <div className="mb-6 p-4 bg-gray-100 rounded text-lg font-mono min-h-[100px]">
          {currentWords.slice(wordIndex, wordIndex + 10).join(' ')}
        </div>

        <Input
          ref={inputRef} 
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Start typing here..."
          className="mb-6 text-lg bg-white text-black"
          disabled={gameState !== 'playing'}
          autoFocus
        />

        <div className="grid py-4 grid-cols-2 gap-4 text-center">
          <div className="bg-blue-100 p-4 rounded">
            <div className="text-2xl font-bold">{String(wpm)}</div>
            <div className="text-sm text-gray-600">Words per minute</div>
          </div>
          <div className="bg-green-200 dark:bg-green-300 -100 p-4 rounded">
            <div className="text-2xl font-bold">{String(accuracy)}%</div>
            <div className="text-sm text-gray-600">Accuracy</div>
          </div>
        </div>

        {gameState === 'finished' && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold mb-2">Game Over!</h2>
            <p>You typed {String(wpm)} words per minute with {String(accuracy)}% accuracy.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeedTyper;
