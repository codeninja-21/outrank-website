const faces = "absolute w-full h-full bg-neutral-900 border border-neutral-600"

export function FaceTop() {
    return (
        <div className={`${faces} -translate-y-43.75 rotate-x-90`}>

        </div>
    );
}

export function FaceBottom() {
    return (
        <div className={`${faces} translate-y-43.75 rotate-x-90`}>

        </div>
    );
}

export function FaceFront() {
    return (
        <div className={`${faces} translate-z-43.75 rotate-x-0`}>

        </div>
    );
}

export function FaceBack() {
    return (
        <div className={`${faces} -translate-z-43.75 rotate-x-0`}>

        </div>
    );
}

export function FaceRight() {
    return (
        <div className={`${faces} translate-x-43.75 rotate-y-90`}>

        </div>
    );
}

export function FaceLeft() {
    return (
        <div className={`${faces} -translate-x-43.75 rotate-y-270`}>

        </div>
    );
}