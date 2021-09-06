import { colors } from '../app/utils/colors'


registerSettingsPage(({ settings }) => (
  <Page>
    <Section
      title={<Text bold align="center">Color Settings</Text>}>
      <ColorSelect
        settingsKey="color_theme"
        colors={colors}
      />
    </Section>
    <Slider
      label="Black background"
      settingsKey="black_slider"
      min="0.4"
      max="0.8"
      step="0.01"
    />
    <Slider
      label="White background"
      settingsKey="white_slider"
      min="0"
      max="0.7"
      step="0.01"
    />
  </Page>
));
