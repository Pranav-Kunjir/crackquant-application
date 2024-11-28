import "./page.css";
const Soluiton = () => {
  return (
    <div>
      <div className="card card-solution">
        <h3>Detailed Solution</h3>
        <div>
          <p>
            This problem is an extension of the famous chessboard problem, where
            we try to pack 53 bricks of size 1×1×41×1×4 into a 6×6×66×6×6 box.
            Here's a step-by-step explanation of why it's not possible:
          </p>
          <ol>
            <li>Volume Check</li>
            <ul>
              <li>The cube has a volume of 216216 units (6×6×66×6×6).</li>
              <li>
                The total volume of the 53 bricks is 212212 units (53×453×4)
              </li>
              <li>
                So, theoretically, the bricks fit into the box, leaving 44 units
                of space
              </li>
            </ul>
            <li>
              3D Chessboard Analogy: Imagine dividing the 6×6×66×6×6 cube into
              2727 smaller 2×2×22×2×2 cubes. Each of these smaller cubes
              alternates between "black" and "white," much like a chessboard.
            </li>
            <li>
              Brick Placement: Each 1×1×41×1×4 brick must cover two "black"
              cubes and two "white" cubes because it's 44 units long. So, each
              brick spans one black cube and one white cube. However, there are
              either 13 "black" cubes and 14 "white" cubes, or vice versa. The
              key observation is that each 2×2×22×2×2 cube can only fit up to 4
              bricks, and since one of the colors (black or white) has fewer
              cubes (13), it can only support 52 bricks in total.
            </li>
            <li>
              Conclusion: Since we need to pack 53 bricks, but we can only fit
              52 based on the cube colors, it’s impossible to fit all 53 bricks
              into the cube.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Soluiton;
