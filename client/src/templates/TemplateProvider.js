import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@mui/material/styles";
import { createContext } from "react";

const TemplateContext = createContext(null);

export const TemplateProvider = ({ children }) => {
  const theme = createTheme({
    overrides: {
        MuiDialog: {
            paperWidthSm : {
                maxWidth: 'unset'
            }
        },
        MuiDialogContent: {
            root : {
                padding: 0,
                '&:first-child' : {
                    paddingTop: 0
                }
            }
        },
        MuiTableCell: {
          root: {
              borderBottom: 'none',
          }
        },
        MuiBadge: {
          colorSecondary : {
            backgroundColor: '#ff6161'
          }
        }
    }
  });
  return (
    <TemplateContext.Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </TemplateContext.Provider>
  );
};

//export default TemplateProvider;
