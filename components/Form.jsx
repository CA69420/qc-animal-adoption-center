/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from 'next-auth/react';

const Form = () => {
	const { data: session } = useSession();

	return (
		<>
			<div>
				{session ? (
					<>
						<h1>You are signed in</h1>
						<img src={session.user.image} alt={session.user.name} />
						<h3>Welcome, {session.user.name}</h3>
						<h3>your email is: {session.user.email}</h3>
						<div>
							<button
								onClick={() => {
									signOut();
								}}
							>
								Sign Out
							</button>
						</div>
					</>
				) : (
					<>
						<form>
							<h1>You are not signed in</h1>
							<div>
								<label>Username </label>
								<input type='text' name='uname' required />
							</div>
							<div>
								<label>Password </label>
								<input type='password' name='pass' required />
							</div>
							<div>
								<input type='submit' value='Submit' />
							</div>
						</form>
						<div>
							<button
								onClick={() => {
									signIn();
								}}
							>
								Login using Google
							</button>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Form;
