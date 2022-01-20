import React, { Component } from 'react';
import styles from './TodoMods.module.scss';
import classNames from 'classnames/bind';
import { LanguageContext } from '../../../LanguageContext';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

class TodoMods extends Component {
  constructor(props) {
    super(props);
    this.state={      
      activeTaskFilterId: 1,
    }
    this.onClickHandler = this.onClickHandler.bind(this);
    this.setActiveTaskFilterId = this.setActiveTaskFilterId.bind(this);
  }

  onClickHandler(currentTaskValue, activeTaskId) {
    this.props.filterCurrentTasks(currentTaskValue);
    this.setActiveTaskFilterId(activeTaskId);
  }

  setActiveTaskFilterId(id) {
    this.setState({
      activeTaskFilterId: id,
    })
  }

  render() {
    const AllTasksClassName = cx({
      todoModsButton: true,
      todoModsButtonActive: this.state.activeTaskFilterId === 1,
    });

    const ActiveTasksClassName = cx({
      todoModsButton: true,
      todoModsButtonActive: this.state.activeTaskFilterId === 2,
    });

    const ImportantTasksClassName = cx({
      todoModsButton: true,
      todoModsButtonActive: this.state.activeTaskFilterId === 3,
    });

    const DoneTasksClassName = cx({
      todoModsButton: true,
      todoModsButtonActive: this.state.activeTaskFilterId === 4,
    });
    
    return (
      <LanguageContext.Consumer>
        {
          ({ language }) => (
            <div className={styles.todoMods}>
              <div className={styles.todoModsContainer}>
                <button 
                  id={1} 
                  onClick={() => this.onClickHandler('all', 1)}
                  className={AllTasksClassName}
                >
                  {language.tasksMods.allTasks}
                </button>

                <button 
                id={2}
                onClick={() => this.onClickHandler(false, 2)}
                className={ActiveTasksClassName}
                >
                  {language.tasksMods.activeTasks}
                </button>

                <button 
                  id={3} 
                  onClick={() => this.onClickHandler('important', 3)}
                  className={ImportantTasksClassName}
                >
                  {language.tasksMods.importantTasks}
                </button>

                <button 
                  id={4} 
                  onClick={() => this.onClickHandler(true, 4)}
                  className={DoneTasksClassName}
                >
                  {language.tasksMods.doneTasks}
                </button>
              </div>
            </div>
          )
        }
      </LanguageContext.Consumer>
    );
  }
}

TodoMods.propTypes = {
  filterCurrentTasks: PropTypes.func,
};

export default TodoMods;