
import { ReactNode } from "react";
import { PageTabs } from "@/features/page-tabs";
import styles from './index.module.scss';

type PropsType = {
  children: ReactNode;
}

export const MainLayout = ({ children }: PropsType) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.text}>
          <h1>
            Мини КВ
          </h1>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.tabs}>
          <PageTabs />
        </div>
        <div className={styles.children}>
          {children}
        </div>
      </div>
    </div>
  );
};
