import { SkillType } from '@/types/skill';
import {
  ReactIcon,
  JavascriptIcon,
  TypescriptIcon,
  RecoilIcon,
  NestjsIcon,
  NextjsIcon,
  ReduxIcon,
  Github,
} from '@/assets';

export const SkillList: SkillType[] = [
  {
    id: 1,
    skillName: 'React',
    skillImage: ReactIcon,
    skillDescription: '여러 프로젝트에 도입하며 사용 경험이 많은 라이브러리입니다.',
  },
  {
    id: 2,
    skillName: 'JavaScript',
    skillImage: JavascriptIcon,
    skillDescription: '자바스크립트의 작동 원리와 기본적인 문법을 이해하고 있습니다.',
  },
  {
    id: 3,
    skillName: 'TypeScript',
    skillImage: TypescriptIcon,
    skillDescription: '타입스크립트의 사용 이유와 장점을 통해 코드를 작성합니다.',
  },
  {
    id: 4,
    skillName: 'Recoil',
    skillImage: RecoilIcon,
    skillDescription: '리코일을 사용하여 전역 상태관리를 관리합니다.',
  },
  {
    id: 5,
    skillName: 'NestJS',
    skillImage: NestjsIcon,
    skillDescription: '기초적인 CRUD 경험을 해보며 Nest의 구조를 알게 되었습니다.',
  },
  {
    id: 6,
    skillName: 'NextJS',
    skillImage: NextjsIcon,
    skillDescription: 'NextJS의 장점을 활용하여 프로젝트에 참여합니다.',
  },
  {
    id: 7,
    skillName: 'Redux',
    skillImage: ReduxIcon,
    skillDescription: '리덕스의 작동원리를 이해하고 있습니다.',
  },
  {
    id: 8,
    skillName: 'Github',
    skillImage: Github,
    skillDescription: '깃허브를 통해 협업을 진행하며 CI/C 경험과 Git-Flow를 경험해보았습니다.',
  },
];