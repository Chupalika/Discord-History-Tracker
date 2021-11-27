using System;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Avalonia;
using Avalonia.Controls;
using Avalonia.Markup.Xaml;

namespace DHT.Desktop.Dialogs {
	public class ProgressDialog : Window {
		private bool isFinished = false;

		public ProgressDialog() {
			InitializeComponent();
			#if DEBUG
			this.AttachDevTools();
			#endif
		}

		private void InitializeComponent() {
			AvaloniaXamlLoader.Load(this);
		}

		[SuppressMessage("ReSharper", "UnusedParameter.Local")]
		private void Loaded(object? sender, EventArgs e) {
			if (DataContext is ProgressDialogModel model) {
				Task.Run(model.StartTask).ContinueWith(OnFinished, TaskScheduler.FromCurrentSynchronizationContext());
			}
		}

		private void OnFinished(Task task) {
			isFinished = true;
			Close();
		}

		[SuppressMessage("ReSharper", "UnusedParameter.Local")]
		private void OnClosing(object? sender, CancelEventArgs e) {
			e.Cancel = !isFinished;
		}
	}
}