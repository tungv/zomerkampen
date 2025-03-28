import { Subtitle, Title } from "@/components/typography";
import {
  CombinedFields,
  FormField,
  FormInput,
  FormLabel,
  FormRoot,
  FormSection,
  SectionHeader,
} from "./Form";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 p-8">
      <Title>Zomerkampen</Title>
      <Subtitle>
        Zomerkampen is een platform voor het organiseren van zomerkampen.
      </Subtitle>

      <FormRoot>
        <FormSection>
          <SectionHeader>Name</SectionHeader>
          <FormField>
            <FormLabel htmlFor="first_name">Voornaam</FormLabel>
            <FormInput
              id="first_name"
              name="first_name"
              placeholder="Voornaam"
            />
          </FormField>
          <FormField>
            <FormLabel htmlFor="last_name">Achternaam</FormLabel>
            <FormInput
              id="last_name"
              name="last_name"
              placeholder="Achternaam"
            />
          </FormField>
        </FormSection>

        <FormSection>
          <SectionHeader>Contact</SectionHeader>
          <FormField>
            <FormLabel htmlFor="first_name">Voornaam</FormLabel>
            <FormInput
              id="first_name"
              name="first_name"
              placeholder="Voornaam"
            />
          </FormField>
          <FormField>
            <FormLabel htmlFor="last_name">Achternaam</FormLabel>
            <FormInput
              id="last_name"
              name="last_name"
              placeholder="Achternaam"
            />
          </FormField>

          <FormField>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput id="email" name="email" placeholder="Email" />
          </FormField>

          <FormField>
            <FormLabel htmlFor="phone">Telefoon</FormLabel>
            <FormInput id="phone" name="phone" placeholder="Telefoon" />
          </FormField>
        </FormSection>

        <FormSection>
          <SectionHeader>Adres</SectionHeader>
          <FormField>
            <FormLabel htmlFor="zip">Postcode</FormLabel>
            <FormInput id="zip" name="zip" placeholder="Postcode" />
          </FormField>

          <FormField>
            <FormLabel htmlFor="city">Stad</FormLabel>
            <FormInput id="city" name="city" placeholder="Stad" />
          </FormField>

          <FormField>
            <FormLabel htmlFor="street">Straat</FormLabel>
            <FormInput id="street" name="street" placeholder="Straat" />
          </FormField>

          <CombinedFields>
            <FormField>
              <FormLabel htmlFor="street_number">Huisnummer</FormLabel>
              <FormInput
                id="street_number"
                name="street_number"
                placeholder="Huisnummer"
              />
            </FormField>

            <FormField>
              <FormLabel htmlFor="bus">Bus</FormLabel>
              <FormInput id="bus" name="bus" placeholder="Bus" />
            </FormField>
          </CombinedFields>
        </FormSection>
      </FormRoot>
    </main>
  );
}
