import { Html, useGLTF } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";

import { motion } from "framer-motion";

function Board(props) {
  const boardModel = useGLTF("/models/board/board.glb");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <e.group theatreKey="board">
      <primitive
        object={boardModel.scene}
        position={[-12.5, -0.05, -8.2]}
        scale={7}
        rotation={[0, 0.95, 0]}
      >
        <Html
          transform
          distanceFactor={0.1}
          position-x={-0.002}
          position-y={0.01}
          position-z={-0.028}
          rotation-y={Math.PI}
        >
          <div
            className="board"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(5px)",
              padding: "40px",
              borderRadius: "30px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 0 20px rgba(0, 243, 255, 0.1)",
            }}
          >
            <h2
              className="board-title"
              style={{
                textShadow: "0 0 10px #bd00ff",
                color: "#fff",
              }}
            >
              Our Stacks:
            </h2>
            <motion.ul
              className="board-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                "React",
                "React-fiber",
                "Fiber-drei",
                "Threatre",
                "Framer-motion",
                "Zustand",
                "Leva",
                "Vite",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    color: "#00f3ff",
                    textShadow: "0 0 8px #00f3ff",
                    x: 10,
                  }}
                  style={{
                    marginBottom: "10px",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </Html>
      </primitive>
    </e.group>
  );
}

export default Board;
