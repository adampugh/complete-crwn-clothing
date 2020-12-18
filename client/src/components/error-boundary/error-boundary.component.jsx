import React from 'react'

class ErrorBoundary extends React.Component {
    state = {
        hasErrored: false
    }

    static getDerivedStateFromError() {
        // process the error
        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        return this.state.hasErrored 
            ? <div>something went wrong</div> 
            : this.props.children
    }
}

export default ErrorBoundary