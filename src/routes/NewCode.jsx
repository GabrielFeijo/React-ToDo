import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegCopy } from 'react-icons/fa';
import './Home.css';
import taskFetch from '../config/axios';

const NewCode = () => {
	const navigate = useNavigate();
	const [code, setCode] = useState('');

	const generatePassword = (length) => {
		const defaultCharacters = 'abcdefghijklmnopqrstuvwxyz';
		const characters = {
			uppercase: defaultCharacters.toUpperCase(),
			numbers: '0123456789',
			symbols: '~!@#$',
		};
		const characterList = [
			defaultCharacters,
			characters.uppercase,
			characters.numbers,
			characters.symbols,
		].join('');
		const pass = Array.from({ length: length }, () =>
			Math.floor(Math.random() * characterList.length)
		)
			.map((number) => characterList[number])
			.join('');

		return pass;
	};

	const copyText = () => {
		navigator.clipboard.writeText(code);
	};

	const redirect = async () => {
		const data = await taskFetch.post('/api/code', {
			code: code,
			active: true,
		});
		navigate(`/task/${code}`);
	};

	useEffect(() => {
		if (code == '') {
			const pass = generatePassword(8);
			setCode(`GG-${pass}`);
		}
	}, []);

	return (
		<div className='home-box '>
			<div className='infos'>
				<h2 className='title'>Seu código de acesso foi gerado !</h2>
				<p className='desc'>
					Lembre-se o código é pessoal e intransferível, não o divulgue e nem
					compartilhe. O código é seu e de mais ninguém! Cuide sempre das suas
					credenciais utilizadas para acesso ao nosso sistema, nunca as
					compartilhe. Lembre-se, você é responsável por todas as ações
					realizadas utilizando as suas credenciais!
				</p>
				<div className='code'>
					<input
						type='text'
						placeholder='Seu código'
						className='input'
						value={code}
						readOnly
					/>
					<FaRegCopy onClick={copyText} />
				</div>

				<div className='buttons'>
					<button onClick={redirect}>Acessar minhas tarefas</button>
					<p className='important'>
						Para salvar seu código clique no botão acima.
					</p>
				</div>
			</div>
		</div>
	);
};

export default NewCode;
