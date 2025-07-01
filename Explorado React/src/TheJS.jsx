import styles from './styles.module.css';

export default function TheJS() {
    let page = null;
    let signedIn = true;

    const courseTitle = 'React para Iniciantes';
    const courseInstructor = 'Prof. Fernandinho';
    const enrolledStudents = 1200;

    const courseJSX = (
        <article>
            <h1>{courseTitle}</h1>
            <p>Instrutor: {courseInstructor}</p>
            <p>Alunos matriculados: {enrolledStudents}</p>
        </article>
    );

    page = (
        <div className={styles['c-article']}>
            {signedIn ? (
                courseJSX
            ) : (
                <div>
                    <p>Por favor, faça login para ver os detalhes do curso.</p>
                </div>
            )}
        </div>
    );

    return <>{page}</>;
}
