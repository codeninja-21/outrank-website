import { FaceTop, FaceBottom, FaceFront, FaceBack, FaceRight, FaceLeft } from "../atoms/faceCube";

export default function Cube() {
    return (
        <div className="relative size-87.5 transform-3d rotate-x-20 rotate-y-20">
            <FaceTop/>
            <FaceBottom/>
            <FaceFront/>
            <FaceBack/>
            <FaceRight/>
            <FaceLeft/>
        </div>
    );
}