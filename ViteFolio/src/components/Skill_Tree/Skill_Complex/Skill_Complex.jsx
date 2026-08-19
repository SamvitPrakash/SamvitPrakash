import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import './Skill_Complex.css';
import SkillNode from '../Skill_Node/Skill_Node.jsx';

function AnimatedEdge({ from, to, color, bulgeColor, period = 2.5 }) {
	const [progress, setProgress] = useState(0);
	const rafRef = useRef();

	useEffect(() => {
		let start;
		function animate(ts) {
			if (!start) start = ts;
			const elapsed = (ts - start) / 1000;
			let p = (elapsed % period) / period;
			setProgress(p);
			rafRef.current = requestAnimationFrame(animate);
		}
		rafRef.current = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(rafRef.current);
	}, [period]);

	const x = from.x + 25 + (to.x - from.x) * progress;
	const y = from.y + 27.5 + (to.y - from.y) * progress;

	return (
		<>
			<line
				x1={from.x + 25}
				y1={from.y + 27.5}
				x2={to.x + 25}
				y2={to.y + 27.5}
				stroke={color}
				strokeWidth={2}
			/>
			<circle
				cx={x}
				cy={y}
				r={4}
				fill={bulgeColor}
				style={{ filter: 'drop-shadow(0 0 6px ' + bulgeColor + ')' }}
			/>
		</>
	);
}

function SkillComplex({ nodes, edges }) {
	return (
		<motion.div 
			className="skill-complex-container"
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ 
				duration: 0.8,
				type: 'spring',
				stiffness: 80,
				damping: 20,
			}}	
		>
			<svg className="skill-complex-svg">
				{edges.map((edge, idx) => {
					const fromNode = nodes.find(n => n.id === edge.from);
					const toNode = nodes.find(n => n.id === edge.to);
					return (
						<AnimatedEdge
							key={idx}
							from={fromNode}
							to={toNode}
							color="var(--current-primary)"
							bulgeColor="var(--current-accent)"
							period={6}
						/>
					);
				})}
			</svg>
			{nodes.map(node => (
				<div
					key={node.id}
					className="skill-complex-node"
					style={{ left: node.x, top: node.y }}
				>
					<motion.div
						initial={{ opacity: 0, x: node.id % 2 === 0 ? 100 : -100 }}
						whileInView={{ opacity: 1, x: 0, y: 0 }}
						transition={{ 
							duration: 1.5, 
							type: 'spring',
							stiffness: 100,
							damping: 20,
						}}
					>
						<SkillNode icon={node.icon} name={node.name} />
					</motion.div>
				</div>
			))}
		</motion.div>
	);
}

export default SkillComplex;