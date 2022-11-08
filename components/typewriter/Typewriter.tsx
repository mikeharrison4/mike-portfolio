import React, {
  RefObject, useEffect, useRef, useState,
} from 'react';

type Config = {
  typingSpeed: number;
}

class TypewriterCore {
  element: any;

  typingSpeed: number;

  queue: any;

  constructor(element: RefObject<HTMLDivElement>, config: Config) {
    this.element = element;
    this.typingSpeed = config.typingSpeed;
    this.queue = [];
  }

  typeString(string: string) {
    this.queue.push(() => new Promise<void>((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        this.element.current?.append(string[i]);
        i += 1;
        if (i >= string.length) {
          clearInterval(interval);
          resolve();
        }
      }, this.typingSpeed);
    }));
    return this;
  }

  pauseFor(number: number) {
    this.queue.push(() => new Promise<void>((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        i += 1;
        if (i >= 1) {
          clearInterval(interval);
          resolve();
        }
      }, number);
    }));

    return this;
  }

  async start() {
    // eslint-disable-next-line no-restricted-syntax
    for (const cb of this.queue) {
      // eslint-disable-next-line no-await-in-loop
      await cb();
    }
  }
}

interface TypewriterProps {
  // eslint-disable-next-line no-unused-vars
  onInit: (typeWriterInstance: TypewriterCore) => void;
  config: {
    typingSpeed: number;
  }
}

function Typewriter({ onInit, config }: TypewriterProps) {
  const typewriterRef = useRef<HTMLDivElement>(null);
  const [typewriterInstance, setTypewriterInstance] = useState<TypewriterCore>();

  useEffect(() => {
    const instance = new TypewriterCore(typewriterRef, config);
    setTypewriterInstance(instance);
  }, [config]);

  useEffect(() => {
    if (onInit && typewriterInstance && typewriterRef.current?.innerText.length === 0) {
      onInit(typewriterInstance);
    }
  }, [onInit, typewriterInstance]);

  return (
    <span ref={typewriterRef} />
  );
}

export default Typewriter;
