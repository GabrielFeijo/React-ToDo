import './Task.css';

import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import InputBox from '../components/InputBox';
import TaskBox from '../components/TaskBox';
import Footer from '../components/Footer';
import dark from '../assets/bg-desktop-dark.jpg';
import light from '../assets/bg-desktop-light.jpg';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import taskFetch from '../config/axios';

function Task() {
	const [theme, setTheme] = useState('dark');
	const [allTasks, setAllTasks] = useState([]);
	const [tasks, setTasks] = useState([]);
	const param = useParams();
	const navigate = useNavigate();

	if (param.code == undefined) {
		navigate('/');
	}

	const changeTheme = () => {
		if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	const [checked, setChecked] = useState(false);
	const [filter, setFilter] = useState(false);
	const [text, setText] = useState('');

	const saveToDo = () => {
		if (text != '' && !checked) {
			setChecked(true);
			taskFetch
				.post('/api/task', {
					code: param.code,
					task: text,
					completed: false,
				})
				.then((data) => {
					const array = tasks;
					array.push(data.data);
					setTasks(array);
					setAllTasks(array);
					setText('');

					setTimeout(() => {
						setChecked(false);
					}, 1000);
				})
				.catch((erro) => {
					console.log(erro);
				});
		}
	};
	const changeText = (value) => {
		setText(value);
	};

	const clearSelected = () => {
		if (!filter) {
			setTasks(allTasks.filter((task) => task.completed !== true));
		} else {
			setTasks(allTasks);
		}

		setFilter(!filter);
	};

	const themeStyle = {
		dark: {
			container: {
				backgroundColor: 'hsl(235, 21%, 11%)',
			},
			color: {
				color: 'hsl(236, 33%, 92%)',
			},
			image: {
				backgroundImage: `url(${dark})`,
			},
			footer: {
				color: 'hsl(236, 33%, 92%)',
			},
			none: {
				color: 'hsl(236, 33%, 92%)',
				backgroundColor: 'hsl(235, 24%, 19%)',
			},
		},
		light: {
			container: {
				backgroundColor: 'white',
			},
			color: {
				color: 'hsl(236, 33%, 92%)',
			},
			image: {
				backgroundImage: `url(${light})`,
			},
			footer: {
				color: 'hsl(237, 14%, 26%)',
			},
			none: {
				color: 'hsl(237, 14%, 26%)',
				backgroundColor: 'white',
			},
		},
	};

	useEffect(() => {
		taskFetch
			.get(`/api/task`, { params: { code: param.code } })
			.then((data) => {
				setTasks(data.data);
				setAllTasks(data.data);
			});
	}, []);

	return (
		<div
			className={`App`}
			style={themeStyle[theme].container}
		>
			<div
				className='bg-image'
				style={themeStyle[theme].image}
			></div>

			<div
				className='container'
				style={themeStyle[theme].color}
			>
				<header>
					<div className='flex'>
						<h1>TODO</h1>

						{theme == 'dark' ? (
							<BsSunFill onClick={changeTheme} />
						) : (
							<BsMoonFill onClick={changeTheme} />
						)}
					</div>
					<InputBox
						theme={theme}
						handleClick={saveToDo}
						check={checked}
						handleChange={changeText}
						text={text}
					/>
				</header>

				<main>
					<div className={`tasks ${theme}`}>
						{tasks.length > 0 ? (
							tasks.map((task) => (
								<TaskBox
									text={task.task}
									id={task._id}
									theme={theme}
									key={task._id}
									completed={task.completed}
									code={task.code}
								/>
							))
						) : (
							<h3
								className='center'
								style={themeStyle[theme].none}
							>
								Nenhuma tarefa encontrada
							</h3>
						)}
					</div>
					<Footer
						theme={theme}
						itens={tasks.length}
						text={filter ? 'Todos' : 'Incompletos'}
						handleClick={clearSelected}
					/>
				</main>

				<footer style={themeStyle[theme].footer}>
					<p>Desenvolvido e mantido por Gabriel Feijó</p>
				</footer>
			</div>
		</div>
	);
}

export default Task;
