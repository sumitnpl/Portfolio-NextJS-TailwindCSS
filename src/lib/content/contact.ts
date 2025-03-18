import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';
export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m currently looking for a remote job or any new opportunities.',
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `https://mail.google.com/mail/?view=cm&fs=1&to=${author.email}&su=Let's%20Connect!&body=Hi%20there,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project.%20Looking%20forward%20to%20hearing%20from%20you!%0D%0A%0D%0ABest%20regards,`,
};
