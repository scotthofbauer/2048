import styles from "./index.module.css";
import TilePage from "./tiles/page";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div>
          <TilePage key={"tilePage"} />
          {/* <Tile key={"tilekey"} number={69}/> */}
        </div>
      </main>
    </>
  );
}
