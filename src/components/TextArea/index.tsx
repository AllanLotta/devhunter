import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  TextareaHTMLAttributes,
} from 'react';

import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  containerStyle?: object;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  containerStyle = {},
  ...rest
}) => {
  const TextAreaRef = useRef<HTMLTextAreaElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleTextAreaFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleTextAreaBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!TextAreaRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: TextAreaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      data-testid="TextArea-container"
    >
      <textarea
        onFocus={handleTextAreaFocus}
        onBlur={handleTextAreaBlur}
        defaultValue={defaultValue}
        ref={TextAreaRef}
        cols={30}
        rows={30}
        {...rest}
      />

      {error && <Error title={error}>*</Error>}
    </Container>
  );
};

export default TextArea;
