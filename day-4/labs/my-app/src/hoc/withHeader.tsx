import React from "react";

function withHeader<P extends object>(WrappedComponent: React.ComponentType<P>, title: string) {
    const ComponentWithHeader: React.FC<P> = (props: P) => {
        return (
            <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
                <h1 style={{ color: "darkblue" }}>{title}</h1>
                <WrappedComponent {...props} />
            </div>
        );
    }
    return ComponentWithHeader;
}

export default withHeader;