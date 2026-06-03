import { FaceTop, FaceBottom, FaceFront, FaceBack, FaceRight, FaceLeft } from "../atoms/faceCube";

export default function Cube({title, description, source, position, num}) {

    const positions = {
        first: "mt-165 z-4",
        second: "mt-110 z-3",
        third: "mt-55 z-2",
        fourth: "mt-0 z-1",
    }

    return (
        <div className={`relative ${positions[position]}`}>
            <div className="relative size-87.5 transform-3d -rotate-x-35 rotate-y-45 hover:-rotate-y-45 transition duration-500 ease-in-out">
                <FaceTop num={num}/>
                <FaceBottom/>
                <FaceFront title={title} description={description} />
                <FaceBack/>
                <FaceRight source={source} />
                <FaceLeft/>
            </div>
        </div>
    );
}