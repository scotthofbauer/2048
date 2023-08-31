import React from 'react';
import styles from './Tile.module.css'; // Adjust the path to your styles

interface TileProps {
  number: number;
}

const Tile: React.FC<TileProps> = ({ number }) => {
  return (
    <div className={styles.tile}>
      <span className={styles.number}>{number}</span>
    </div>
  );
};

export default Tile;