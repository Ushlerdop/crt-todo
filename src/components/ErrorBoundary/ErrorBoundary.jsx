import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    console.error(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1 align='center'>Что-то пошло не так. Перезагрузите страницу или вернитесь на предыдущую</h1>;
    }

    return this.props.children; 
  }
}
//принимает только один элемент. Не уверен, что это правильно, но мне так кажется :)
ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired
};

export default ErrorBoundary;