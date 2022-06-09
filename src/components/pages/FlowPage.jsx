import React, { FC } from "react";
import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';

const board = {
  columns: [
    {
      id: 1,
      title: 'Отклик',
      cards: [
        {
          id: 1,
          title: 'Никита Ведькал',
          description: 'React разработчик'
        },
      ]
    },
    {
      id: 2,
      title: 'Скрининг',
      cards: [
        {
          id: 2,
          title: 'Максим Машков',
          description: 'Логист'
        },
      ]
    },
    {
      id: 3,
      title: 'Скрининг пройден',
      cards: [
        {
          id: 3,
          title: 'Сергей Петров',
          description: 'Android разработчик'
        },
        {
          id: 4,
          title: 'Иван Иванов',
          description: 'iOS разработчик'
        },
        {
          id: 5,
          title: 'Дмитрий Сергеев',
          description: 'Unity разработчик'
        },
      ]
    },
    {
      id: 4,
      title: 'Техническое интервью',
      cards: [
        
      ]
    },
    {
      id: 5,
      title: 'Техническое пройдено',
      cards: [
   
      ]
    },
    {
      id: 6,
      title: 'Техническое не пройдено',
      cards: [

      ]
    },
    {
      id: 7,
      title: 'Backlog',
      cards: [
      ]
    }
  ]
}

const FlowPage = (props) => {
  return (
    <div>
      <Board initialBoard = {board} style={{minHeight: "100%"}}/>
    </div>
  );
};

export default FlowPage;
