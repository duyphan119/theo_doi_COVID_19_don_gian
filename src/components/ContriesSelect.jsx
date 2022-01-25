import { NativeSelect, InputLabel } from "@mui/material";
export default function ContriesSelect({
  countries,
  onSelectCountry,
  slug,
}) {
  const handleChange = (e) => {
    onSelectCountry(e.target.value);
  };
  return (
    <div>
      <InputLabel htmlFor="country">Chọn quốc qia</InputLabel>
      <NativeSelect id="country" onChange={handleChange} value={slug}>
        {countries.map((item, index) => {
          return (
            <option value={item.Slug} key={index}>
              {item.Country}
            </option>
          );
        })}
      </NativeSelect>
    </div>
  );
}
