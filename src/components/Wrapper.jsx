// Wrapper.jsx
// A simple layout component that provides consistent section
// and container markup around its `children`. An optional `id`
// prop can be used to target the section (e.g. for navigation links).
export default function Wrapper ( {children, id} ) {
    return (
        <div className="section" id={id}>
            <div className = "container">
                {children}
            </div>
        </div>
    );
}