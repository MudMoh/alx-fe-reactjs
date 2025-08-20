import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
	username: Yup.string().required("Username is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	password: Yup.string().required("Password is required"),
});

function FormikForm() {
	return (
		<Formik
			initialValues={{ username: "", email: "", password: "" }}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				alert("Registration successful!\n" + JSON.stringify(values, null, 2));
				setSubmitting(false);
				resetForm();
				// Simulate API call here
			}}>
			{({ isSubmitting }) => (
				<Form style={{ maxWidth: 400, margin: "2rem auto" }}>
					<h2>Register (Formik)</h2>
					<div>
						<Field name="username" placeholder="Username" />
						<ErrorMessage
							name="username"
							component="div"
							style={{ color: "red" }}
						/>
					</div>
					<div>
						<Field name="email" type="email" placeholder="Email" />
						<ErrorMessage
							name="email"
							component="div"
							style={{ color: "red" }}
						/>
					</div>
					<div>
						<Field name="password" type="password" placeholder="Password" />
						<ErrorMessage
							name="password"
							component="div"
							style={{ color: "red" }}
						/>
					</div>
					<button type="submit" disabled={isSubmitting}>
						Register
					</button>
				</Form>
			)}
		</Formik>
	);
}

export default FormikForm;
