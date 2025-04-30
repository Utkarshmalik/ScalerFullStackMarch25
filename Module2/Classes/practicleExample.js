class Store {
    constructor(initialState = {}) {
      this.state = initialState;
      this.listeners = new Set();
    }
  
    subscribe(listener) {
      this.listeners.add(listener);
      return () => this.listeners.delete(listener);
    }
  
    setState(newState) {
      this.state = { ...this.state, ...newState };
      this.notify();
    }
  
    getState() {
      return this.state;
    }
  
    notify() {
      this.listeners.forEach((listener) => listener(this.state));
    }
  }
  
  // Usage example
  const store = new Store({ count: 0 });
  const unsubscribe = store.subscribe((state) => {
    console.log("State updated:", state);
  });
  
  store.setState({ count: 1 }); // logs: State updated: { count: 1 }
  unsubscribe(); // Remove listener