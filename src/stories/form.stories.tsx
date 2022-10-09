import { Box, Flex, Text } from 'theme-ui';
import {
  Button,
  Input as InputComponent,
  Label as LabelComponent,
  Textarea as TextareaComponent,
  Select as SelectComponent,
  Slider as SliderComponent,
  Radio as RadioComponent,
  Checkbox as CheckboxComponent
} from '../components';

export function Input() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Text variant="heading" sx={{ width: '100%' }}>
        Input
      </Text>

      <InputComponent name="username" id="username" mb={3} />

      <Text variant="heading" sx={{ width: '100%' }}>
        Input Error
      </Text>

      <InputComponent
        variant="inputError"
        name="username"
        id="username"
        mb={3}
      />
    </Box>
  );
}

export function Label() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Text variant="heading" sx={{ width: '100%' }}>
        Label
      </Text>

      <LabelComponent htmlFor="username">Username</LabelComponent>
      <InputComponent name="username" id="username" mb={3} />

      <Text variant="heading" sx={{ width: '100%' }}>
        Thin label
      </Text>

      <LabelComponent variant="thinLabel" htmlFor="username">
        Username
      </LabelComponent>
      <InputComponent name="username" id="username" mb={3} />
    </Box>
  );
}

export function Select() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Text variant="heading" sx={{ width: '100%', marginBottom: '1rem' }}>
        Select
      </Text>

      <SelectComponent name="sound" id="sound" mb={3}>
        <option>Beep</option>
        <option>Boop</option>
        <option>Blip</option>
      </SelectComponent>
    </Box>
  );
}

export function Radio() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Text variant="heading" sx={{ width: '100%', marginBottom: '1rem' }}>
        Select
      </Text>

      <Flex mb={3}>
        <LabelComponent>
          <RadioComponent name="letter" /> Alpha
        </LabelComponent>
        <LabelComponent>
          <RadioComponent name="letter" /> Bravo
        </LabelComponent>
        <LabelComponent>
          <RadioComponent name="letter" /> Charlie
        </LabelComponent>
      </Flex>
    </Box>
  );
}

export function Checkbox() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Text variant="heading" sx={{ width: '100%', marginBottom: '1rem' }}>
        Select
      </Text>

      <Box>
        <LabelComponent mb={3}>
          <CheckboxComponent />
          Remember me
        </LabelComponent>
      </Box>
    </Box>
  );
}

export function Slider() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Text variant="heading" sx={{ width: '100%', marginBottom: '1rem' }}>
        Slider
      </Text>

      <SliderComponent mb={3} />

      <Text variant="heading" sx={{ width: '100%', marginBottom: '1rem' }}>
        Slider active
      </Text>

      <SliderComponent variant="sliderActive" mb={3} />
    </Box>
  );
}

export function Textarea() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Text variant="heading" sx={{ width: '100%', marginBottom: '1rem' }}>
        Textarea
      </Text>

      <TextareaComponent name="comment" id="comment" rows={6} mb={3} />

      <Text variant="heading" sx={{ width: '100%', marginBottom: '1rem' }}>
        Textarea Error
      </Text>

      <TextareaComponent
        variant="textareaError"
        name="comment"
        id="comment"
        rows={6}
        mb={3}
      />
    </Box>
  );
}

export function Form() {
  return (
    <Box as="form" onSubmit={(e) => e.preventDefault()}>
      <LabelComponent htmlFor="username">Username</LabelComponent>
      <InputComponent name="username" id="username" mb={3} />
      <LabelComponent htmlFor="password">Password</LabelComponent>
      <InputComponent type="password" name="password" id="password" mb={3} />
      <Box>
        <LabelComponent mb={3}>
          <CheckboxComponent />
          Remember me
        </LabelComponent>
      </Box>
      <LabelComponent htmlFor="sound">Sound</LabelComponent>
      <SelectComponent name="sound" id="sound" mb={3}>
        <option>Beep</option>
        <option>Boop</option>
        <option>Blip</option>
      </SelectComponent>
      <LabelComponent htmlFor="comment">Comment</LabelComponent>
      <TextareaComponent name="comment" id="comment" rows={6} mb={3} />
      <Flex mb={3}>
        <LabelComponent>
          <RadioComponent name="letter" /> Alpha
        </LabelComponent>
        <LabelComponent>
          <RadioComponent name="letter" /> Bravo
        </LabelComponent>
        <LabelComponent>
          <RadioComponent name="letter" /> Charlie
        </LabelComponent>
      </Flex>
      <LabelComponent>Slider</LabelComponent>
      <SliderComponent mb={3} />
      <Button>Submit</Button>
    </Box>
  );
}
