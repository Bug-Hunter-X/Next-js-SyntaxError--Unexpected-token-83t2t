```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      {/* This is an error! */}
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

export default function MyComponent() {
  return (
    <div>I am a component!</div>
  );
}
```