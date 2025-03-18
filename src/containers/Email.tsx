import { author } from '@/lib/content/portfolio';

import { Sidebar, SocialLink } from '@/components';

const Email = () => {
  return (
    <Sidebar side="right">
      <SocialLink
       href={`https://mail.google.com/mail/?view=cm&fs=1&to=${author.email}`}
        className="[writing-mode:vertical-lr] font-mono tracking-widest text-m"
      >
        {author.email}
      </SocialLink>
    </Sidebar>
  );
};

export default Email;
