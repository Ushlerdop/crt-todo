import React, { Component } from 'react';

interface IProps {
  readonly children: React.ReactNode
}

interface IState {
  readonly hasError: boolean
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): IState {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    console.error(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1 className='ErrorBoundaryMessage'>Что-то пошло не так. Перезагрузите страницу или вернитесь на предыдущую</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;