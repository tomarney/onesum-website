// Outputs: /humans.txt

export async function get() {
  return {
    body: 
`/* TEAM */

  Web developer, designer: Tom Arney
  Website: https://onesum.uk

/* SITE */

  Last update: ${new Date().toISOString().substring(0, 10)}
  Language: English
`,
  };
}