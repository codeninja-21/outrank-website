import { FaceTop, FaceBottom, FaceFront, FaceBack, FaceRight, FaceLeft } from "../atoms/faceCube";

export default function Cube() {
    return (
        <div className="relative size-87.5 transform-3d -rotate-x-35 rotate-y-45 hover:-rotate-y-45 transition duration-500 ease-in-out">
            <FaceTop/>
            <FaceBottom/>
            <FaceFront/>
            <FaceBack/>
            <FaceRight/>
            <FaceLeft/>
        </div>
    );
}