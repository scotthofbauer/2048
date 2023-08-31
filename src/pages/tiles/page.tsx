import Tile from "./tile";
import styles from './Tile.module.css';
import React, { useState, useEffect } from 'react';
import useKeypress from 'react-use-keypress';


const TilePage: React.FC = () => {

    const [board, setBoard] = useState<number[][]>([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]);
    useEffect(() => {
        const newBoard = InitializeBoard();
        setBoard(newBoard);
    }, []);

    function InitializeBoard(): number[][] {
        const newBoard = [...board]; // Create a copy of the current board
        console.log("Calling Initialize Board")
        newBoard[getRandomInteger(0, 3)][getRandomInteger(0, 3)] = generateStartingNumber();
        return newBoard
    }
    
    function getRandomInteger(min: number, max: number):number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function generateStartingNumber():number {
        return Math.random() < 0.75 ? 2 : 4; // 75% chance of 2, 25% chance of 4
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    useKeypress(['ArrowLeft', 'ArrowRight'], (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
            // moveLeft();
            console.log("Move Left")
        } else {
        //   moveRight();
            console.log("Move Right")

        }
    });

    return (
        <div className={styles.border}>
            {board?.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
                {row.map((number, columnIndex) => (
                    <Tile key={`${rowIndex}-${columnIndex}`} number={number} />
                ))}
            </div>
            ))}
        </div>
    )
}


export default TilePage;


// export const HandleKeyDown = (event: KeyboardEvent) => {
//     // Handle the key press here
//     console.log('Key pressed:', event.key);
//   };


// function moveLeft() {

// }

// function moveRight() {

// }

// function moveUp() {

// }

// function moveDown() {
    
// }
