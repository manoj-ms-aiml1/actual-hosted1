import { Skill } from '../types';

export const skills: Skill[] = [
  // Programming Languages
  { 
    id: 'python', 
    name: 'Python', 
    category: 'programming', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', 
    color: '#3776ab' 
  },
  { 
    id: 'javascript', 
    name: 'JavaScript', 
    category: 'programming', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', 
    color: '#f7df1e' 
  },
  { 
    id: 'java', 
    name: 'Java', 
    category: 'programming', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', 
    color: '#007396' 
  },
  { 
    id: 'cpp', 
    name: 'C++', 
    category: 'programming', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', 
    color: '#00599c' 
  },
  { 
    id: 'sql', 
    name: 'SQL', 
    category: 'programming', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', 
    color: '#336791' 
  },

  // AI/ML
  { 
    id: 'tensorflow', 
    name: 'TensorFlow', 
    category: 'ai-ml', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', 
    color: '#ff6f00' 
  },
  { 
    id: 'pytorch', 
    name: 'PyTorch', 
    category: 'ai-ml', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg', 
    color: '#ee4c2c' 
  },
  { 
    id: 'sklearn', 
    name: 'Scikit-learn', 
    category: 'ai-ml', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg', 
    color: '#f7931e' 
  },
  { 
    id: 'keras', 
    name: 'Keras', 
    category: 'ai-ml', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg', 
    color: '#d00000' 
  },
  { 
    id: 'opencv', 
    name: 'OpenCV', 
    category: 'ai-ml', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg', 
    color: '#5c3ee8' 
  },

  // Web Technologies
  { 
    id: 'react', 
    name: 'React.js', 
    category: 'web', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', 
    color: '#61dafb' 
  },
  { 
    id: 'nodejs', 
    name: 'Node.js', 
    category: 'web', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', 
    color: '#339933' 
  },
  { 
    id: 'express', 
    name: 'Express.js', 
    category: 'web', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg', 
    color: '#000000' 
  },
  { 
    id: 'flask', 
    name: 'Flask', 
    category: 'web', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg', 
    color: '#000000' 
  },
  { 
    id: 'html5', 
    name: 'HTML5', 
    category: 'web', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', 
    color: '#e34f26' 
  },
  { 
    id: 'css3', 
    name: 'CSS3', 
    category: 'web', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', 
    color: '#1572b6' 
  },

  // Tools & Technologies
  { 
    id: 'git', 
    name: 'Git', 
    category: 'tools', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', 
    color: '#f05032' 
  },
  { 
    id: 'docker', 
    name: 'Docker', 
    category: 'tools', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', 
    color: '#2496ed' 
  },
  { 
    id: 'aws', 
    name: 'AWS', 
    category: 'tools', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', 
    color: '#ff9900' 
  },
  { 
    id: 'gcp', 
    name: 'Google Cloud', 
    category: 'tools', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', 
    color: '#4285f4' 
  },
  { 
    id: 'mysql', 
    name: 'MySQL', 
    category: 'tools', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', 
    color: '#4479a1' 
  },
  { 
    id: 'postgresql', 
    name: 'PostgreSQL', 
    category: 'tools', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', 
    color: '#336791' 
  },

  // Soft Skills
  { 
    id: 'leadership', 
    name: 'Leadership', 
    category: 'soft-skills', 
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', 
    color: '#ffd700' 
  },
  { 
    id: 'communication', 
    name: 'Communication', 
    category: 'soft-skills', 
    icon: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png', 
    color: '#20b2aa' 
  },
  { 
    id: 'teamwork', 
    name: 'Team Collaboration', 
    category: 'soft-skills', 
    icon: 'https://cdn-icons-png.flaticon.com/512/1534/1534938.png', 
    color: '#32cd32' 
  },
  { 
    id: 'problem-solving', 
    name: 'Problem Solving', 
    category: 'soft-skills', 
    icon: 'https://cdn-icons-png.flaticon.com/512/2620/2620445.png', 
    color: '#9370db' 
  },
  { 
    id: 'adaptability', 
    name: 'Adaptability', 
    category: 'soft-skills', 
    icon: 'https://cdn-icons-png.flaticon.com/512/3094/3094837.png', 
    color: '#ff69b4' 
  }
];