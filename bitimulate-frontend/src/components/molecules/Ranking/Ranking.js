import React from 'react';
import styles from './Ranking.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const RankItem = ({displayName, profit, rankNumber}) => {
  const percentage = Math.round(profit * 10000) / 100;
  
  return (
    <Link className={cx('rank-item')} to={`/report/${displayName}`}>
      <div className={cx('num')}>
        {rankNumber}위
      </div>
      <div className={cx('username')}>
        {displayName}
      </div>
      <div className={cx('profit', profit >= 0 ? 'positive' : 'negative')}>
        {profit > 0 && '+'}{percentage}%
      </div>
    </Link>
  )
}

const Ranking = ({data, count, monthly}) => {

  const rankList = data.map(
    (rank, i) => {
      const { displayName, earningsRatio, monthlyRatio } = rank.toJS();
      return (
        <RankItem 
          displayName={displayName} 
          profit={earningsRatio || monthlyRatio}
          key={displayName}
          rankNumber={i+1}
        />
      );
    }
  )
  return (
    <div className={cx('ranking')}>
      <div className={cx('user-number')}>
        <b>트레이더 수:</b> {count}명
      </div>
      <div className={cx('ranking-list')}>
        <div className={cx('row-desc')}>
          <div className={cx('num')}>순위</div>
          <div className={cx('username')}>닉네임</div>
          <div className={cx('profit')}>수익률</div>
        </div>
        {rankList}
      </div>
    </div>
  )
}

export default Ranking;