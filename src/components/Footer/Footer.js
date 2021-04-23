import s from './Footer.module.scss';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => (
  <footer>
    <Container classes={s.footer}>
      <Typography variant="body1">
        <p className={s.text}>
          Developed by
          <span className={s.name}> Halyna Pryn</span>
        </p>
        <a
          href="mailto:prynhalyna@gmail.com"
          target="blank"
          aria-label="Link to email"
          className={s.linkEmail}
        >
          <EmailIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/nataliia-lazorenko-6a5b22152/"
          target="_blank"
          aria-label="Link to LinkedIn"
          rel="noreferrer"
          className={s.linkLinkedin}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/Halyna30"
          target="_blank"
          aria-label="Link to GitHub"
          rel="noreferrer"
          className={s.linkGitHub}
        >
          <GitHubIcon />
        </a>
      </Typography>
    </Container>
  </footer>
);

export default Footer;
