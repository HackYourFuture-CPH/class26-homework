const BorderWrapper = ({ children }) => (
    <div style={{ border: '2px solid black', padding: '10px', margin: '10px' }}>
        {children}
    </div>
);

export default BorderWrapper